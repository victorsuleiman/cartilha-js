import createDeck from "./game/Deck";
import createCard from "./game/Card"
import createPlayers from "./game/Player";

export const Cartilha = {
    setup: () => ({
        deck: createDeck(), 
        players: createPlayers, 
        manilha: createCard(null,'','','',true)
    }),

    moves: {
        chooseManilha
         : ({G}) => {
            G.manilha = assignManilha(G.deck);
        }
    }
}

function assignManilha(deck) {
    const deckLength = deck.length;
    const randomIndex = Math.floor(Math.random() * deckLength)
    return deck.splice(randomIndex,1)
}