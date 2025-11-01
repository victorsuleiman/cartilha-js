import createDeck from "./game/Deck";
import createCard from "./game/Card"

export const Cartilha = {
    setup: () => ({deck: createDeck()}),
}