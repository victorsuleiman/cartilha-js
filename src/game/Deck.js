import aceOfClubsImg from './sprites/ace_of_clubs.png';
import twoOfClubsImg from './sprites/2_of_clubs.png';
import threeOfClubsImg from './sprites/3_of_clubs.png';
import fourOfClubsImg from './sprites/4_of_clubs.png';
import fiveOfClubsImg from './sprites/5_of_clubs.png';
import sixOfClubsImg from './sprites/6_of_clubs.png';
import sevenOfClubsImg from './sprites/7_of_clubs.png';
import jackOfClubsImg from './sprites/jack_of_clubs.png';
import queenOfClubsImg from './sprites/queen_of_clubs.png';
import kingOfClubsImg from './sprites/king_of_clubs.png';

import aceOfDiamondsImg from './sprites/ace_of_diamonds.png';
import twoOfDiamondsImg from './sprites/2_of_diamonds.png';
import threeOfDiamondsImg from './sprites/3_of_diamonds.png';
import fourOfDiamondsImg from './sprites/4_of_diamonds.png';
import fiveOfDiamondsImg from './sprites/5_of_diamonds.png';
import sixOfDiamondsImg from './sprites/6_of_diamonds.png';
import sevenOfDiamondsImg from './sprites/7_of_diamonds.png';
import jackOfDiamondsImg from './sprites/jack_of_diamonds.png';
import queenOfDiamondsImg from './sprites/queen_of_diamonds.png';
import kingOfDiamondsImg from './sprites/king_of_diamonds.png';

import aceOfHeartsImg from './sprites/ace_of_hearts.png';
import twoOfHeartsImg from './sprites/2_of_hearts.png';
import threeOfHeartsImg from './sprites/3_of_hearts.png';
import fourOfHeartsImg from './sprites/4_of_hearts.png';
import fiveOfHeartsImg from './sprites/5_of_hearts.png';
import sixOfHeartsImg from './sprites/6_of_hearts.png';
import sevenOfHeartsImg from './sprites/7_of_hearts.png';
import jackOfHeartsImg from './sprites/jack_of_hearts.png';
import queenOfHeartsImg from './sprites/queen_of_hearts.png';
import kingOfHeartsImg from './sprites/king_of_hearts.png';

import aceOfSpadesImg from './sprites/ace_of_spades.png';
import twoOfSpadesImg from './sprites/2_of_spades.png';
import threeOfSpadesImg from './sprites/3_of_spades.png';
import fourOfSpadesImg from './sprites/4_of_spades.png';
import fiveOfSpadesImg from './sprites/5_of_spades.png';
import sixOfSpadesImg from './sprites/6_of_spades.png';
import sevenOfSpadesImg from './sprites/7_of_spades.png';
import jackOfSpadesImg from './sprites/jack_of_spades.png';
import queenOfSpadesImg from './sprites/queen_of_spades.png';
import kingOfSpadesImg from './sprites/king_of_spades.png';

import hiddenImg from './sprites/red back.png'

import createCard from './Card'

const fourOfDiamonds = createCard(1, 'diamonds', '4', '5', fourOfDiamondsImg);
const fourOfSpades = createCard(2, 'spades', '4', '5', fourOfSpadesImg);
const fourOfHearts = createCard(3, 'hearts', '4', '5', fourOfHeartsImg);
const fourOfClubs = createCard(4, 'clubs', '4', '5', fourOfClubsImg);

const fiveOfDiamonds = createCard(5, 'diamonds', '5', '6', fiveOfDiamondsImg);
const fiveOfSpades = createCard(6, 'spades', '5', '6', fiveOfSpadesImg);
const fiveOfHearts = createCard(7, 'hearts', '5', '6', fiveOfHeartsImg);
const fiveOfClubs = createCard(8, 'clubs', '5', '6', fiveOfClubsImg);

const sixOfDiamonds = createCard(9, 'diamonds', '6', '7', sixOfDiamondsImg);
const sixOfSpades = createCard(10, 'spades', '6', '7', sixOfSpadesImg);
const sixOfHearts = createCard(11, 'hearts', '6', '7', sixOfHeartsImg);
const sixOfClubs = createCard(12, 'clubs', '6', '7', sixOfClubsImg);

const sevenOfDiamonds = createCard(13, 'diamonds', '7', 'Q', sevenOfDiamondsImg);
const sevenOfSpades = createCard(14, 'spades', '7', 'Q', sevenOfSpadesImg);
const sevenOfHearts = createCard(15, 'hearts', '7', 'Q', sevenOfHeartsImg);
const sevenOfClubs = createCard(16, 'clubs', '7', 'Q', sevenOfClubsImg);

const queenOfDiamonds = createCard(17, 'diamonds', 'Q', 'J', queenOfDiamondsImg);
const queenOfSpades = createCard(18, 'spades', 'Q', 'J', queenOfSpadesImg);
const queenOfHearts = createCard(19, 'hearts', 'Q', 'J', queenOfHeartsImg);
const queenOfClubs = createCard(20, 'clubs', 'Q', 'J', queenOfClubsImg);

const jackOfDiamonds = createCard(21, 'diamonds', 'J', 'K', jackOfDiamondsImg);
const jackOfSpades = createCard(22, 'spades', 'J', 'K', jackOfSpadesImg);
const jackOfHearts = createCard(23, 'hearts', 'J', 'K', jackOfHeartsImg);
const jackOfClubs = createCard(24, 'clubs', 'J', 'K', jackOfClubsImg);

const kingOfDiamonds = createCard(25, 'diamonds', 'K', 'A', kingOfDiamondsImg);
const kingOfSpades = createCard(26, 'spades', 'K', 'A', kingOfSpadesImg);
const kingOfHearts = createCard(27, 'hearts', 'K', 'A', kingOfHeartsImg);
const kingOfClubs = createCard(28, 'clubs', 'K', 'A', kingOfClubsImg);

const aceOfDiamonds = createCard(29, 'diamonds', 'A', '2', aceOfDiamondsImg);
const aceOfSpades = createCard(30, 'spades', 'A', '2', aceOfSpadesImg);
const aceOfHearts = createCard(31, 'hearts', 'A', '2', aceOfHeartsImg);
const aceOfClubs = createCard(32, 'clubs', 'A', '2', aceOfClubsImg);

const twoOfDiamonds = createCard(33, 'diamonds', '2', '3', twoOfDiamondsImg);
const twoOfSpades = createCard(34, 'spades', '2', '3', twoOfSpadesImg);
const twoOfHearts = createCard(35, 'hearts', '2', '3', twoOfHeartsImg);
const twoOfClubs = createCard(36, 'clubs', '2', '3', twoOfClubsImg);

const threeOfDiamonds = createCard(37, 'diamonds', '3', '4', threeOfDiamondsImg);
const threeOfSpades = createCard(38, 'spades', '3', '4', threeOfSpadesImg);
const threeOfHearts = createCard(39, 'hearts', '3', '4', threeOfHeartsImg);
const threeOfClubs = createCard(40, 'clubs', '3', '4', threeOfClubsImg);

const createDeck = () => {
    const cards = []

    //Add cards
    cards.push(fourOfDiamonds);
    cards.push(fourOfSpades);
    cards.push(fourOfHearts);
    cards.push(fourOfClubs);
    cards.push(fiveOfDiamonds);
    cards.push(fiveOfSpades);
    cards.push(fiveOfHearts);
    cards.push(fiveOfClubs);
    cards.push(sixOfDiamonds);
    cards.push(sixOfSpades);
    cards.push(sixOfHearts);
    cards.push(sixOfClubs);
    cards.push(sevenOfDiamonds);
    cards.push(sevenOfSpades);
    cards.push(sevenOfHearts);
    cards.push(sevenOfClubs);
    cards.push(queenOfDiamonds);
    cards.push(queenOfSpades);
    cards.push(queenOfHearts);
    cards.push(queenOfClubs);
    cards.push(jackOfDiamonds);
    cards.push(jackOfSpades);
    cards.push(jackOfHearts);
    cards.push(jackOfClubs);
    cards.push(kingOfDiamonds);
    cards.push(kingOfSpades);
    cards.push(kingOfHearts);
    cards.push(kingOfClubs);
    cards.push(aceOfDiamonds);
    cards.push(aceOfSpades);
    cards.push(aceOfHearts);
    cards.push(aceOfClubs);
    cards.push(twoOfDiamonds);
    cards.push(twoOfSpades);
    cards.push(twoOfHearts);
    cards.push(twoOfClubs);
    cards.push(threeOfDiamonds);
    cards.push(threeOfSpades);
    cards.push(threeOfHearts);
    cards.push(threeOfClubs);

    //Shuffle
    for (let i = cards.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
}

export default createDeck;
