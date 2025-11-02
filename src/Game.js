import createDeck from "./game/Deck";
import createCard from "./game/Card"
import createPlayers from "./game/Player";
import { INVALID_MOVE } from 'boardgame.io/dist/cjs/core.js';

export const Cartilha = {
    setup: () => ({
        deck: createDeck(),
        players: createPlayers,
        vira: createCard(null, '', '', '', '', true),
        handSize: 2,
        board: []
    }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    phases: {
        deal: {
            start: true,
            onBegin: ({ G }) => {
                G.vira = assignVira(G.deck);
                empowerCards(G.vira, G.deck);
                dealCards(G.players, G.deck, G.handSize);
            }
        }
    },

    moves: {
        playCard: ({ G, playerID, ctx }, cardIndex, ownerID) => {
            //In order to check if player owns the hand it's clicking, you need to check if ownerID is equal to playerID.
            //But ownerID is a player property which is int. so we cast it as a string to match playerID.
            if (playerID !== ctx.currentPlayer) {
                console.log("Invalid: playerID !== ctx.currentPlayer");
                return INVALID_MOVE;
            }
            if (String(ownerID) !== playerID) {
                console.log("Invalid: ownerID !== playerID");
                return INVALID_MOVE;
            }

            const hand = G.players[playerID].cards;
            if (cardIndex < 0 || cardIndex >= hand.length) {
                console.log("Invalid: cardIndex < 0 || cardIndex >= hand.length");
                return INVALID_MOVE;
            }

            const [playedCard] = hand.splice(cardIndex, 1);
            G.board.push(playedCard);
        },
    },
}

function assignVira(deck) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const [vira] = deck.splice(randomIndex, 1);
    return vira;
}

function addCardtoPlayerHand(player, card) {
    player.cards.push(card);
}

function dealCards(players, deck, handSize) {
    //add cards according to handSize to players
    for (let counter = handSize; counter > 0; counter--) {
        players.forEach((player) => {
            addCardtoPlayerHand(player, deck.pop());
        });
    }

    //sort players hands
    players.forEach((player) => {
        player.cards.sort((a, b) => a.value - b.value);
    })
}

function empowerCards(vira, deck) {
    const manilhaRank = vira.nextRank;
    deck.forEach((card) => {
        if (card.rank === manilhaRank) {
            switch (card.suit) {
                case 'diamonds':
                    card.value = 41
                    break;
                case 'spades':
                    card.value = 42
                    break;
                case 'hearts':
                    card.value = 43
                    break;
                case 'clubs':
                    card.value = 44
                    break;
                default:
                    break;
            }
        }
    });
}