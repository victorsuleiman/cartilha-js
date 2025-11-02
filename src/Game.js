import createDeck from "./game/Deck";
import createCard from "./game/Card"
import createPlayers from "./game/Player";
import { INVALID_MOVE } from 'boardgame.io/dist/cjs/core.js';

export const Cartilha = {
    setup: () => ({
        deck: createDeck(), 
        players: createPlayers, 
        vira: createCard(null,'','','','',true),
        handSize : 2,
        board : []
    }),

    turn:  {
    minMoves: 1,
    maxMoves: 1,
    },

    phases: {
        deal: {
            start: true,
            onBegin: ({G}) => {
                G.vira = assignVira(G.deck);
                empowerCards(G.vira, G.deck);
                dealCards(G.players, G.deck, G.handSize);
            }
        }
    },
    
    moves: {
        playCard: ({G, playerID},i) => {
            let playerHand = G.players[playerID].cards;
            if (i >= 0 && i < playerHand.length) {
                const [removedCard] = playerHand.splice(i,1);
                G.board.push(removedCard);
            }
        }

    },
}

function assignVira(deck) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const [vira] = deck.splice(randomIndex, 1);
    return vira;
}

function addCardtoPlayerHand (player, card) {
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
        player.cards.sort((a,b) => a.value - b.value);
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