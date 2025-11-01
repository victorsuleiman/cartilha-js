import Card from './Card';

import aceOfClubs from './sprites/ace_of_clubs.png';
import twoOfClubs from './sprites/2_of_clubs.png';
import threeOfClubs from './sprites/3_of_clubs.png';
import fourOfClubs from './sprites/4_of_clubs.png';
import fiveOfClubs from './sprites/5_of_clubs.png';
import sixOfClubs from './sprites/6_of_clubs.png';
import sevenOfClubs from './sprites/7_of_clubs.png';
import jackOfClubs from './sprites/jack_of_clubs.png';
import queenOfClubs from './sprites/queen_of_clubs.png';
import kingOfClubs from './sprites/king_of_clubs.png';

import aceOfDiamonds from './sprites/ace_of_diamonds.png';
import twoOfDiamonds from './sprites/2_of_diamonds.png';
import threeOfDiamonds from './sprites/3_of_diamonds.png';
import fourOfDiamonds from './sprites/4_of_diamonds.png';
import fiveOfDiamonds from './sprites/5_of_diamonds.png';
import sixOfDiamonds from './sprites/6_of_diamonds.png';
import sevenOfDiamonds from './sprites/7_of_diamonds.png';
import jackOfDiamonds from './sprites/jack_of_diamonds.png';
import queenOfDiamonds from './sprites/queen_of_diamonds.png';
import kingOfDiamonds from './sprites/king_of_diamonds.png';

import aceOfHearts from './sprites/ace_of_hearts.png';
import twoOfHearts from './sprites/2_of_hearts.png';
import threeOfHearts from './sprites/3_of_hearts.png';
import fourOfHearts from './sprites/4_of_hearts.png';
import fiveOfHearts from './sprites/5_of_hearts.png';
import sixOfHearts from './sprites/6_of_hearts.png';
import sevenOfHearts from './sprites/7_of_hearts.png';
import jackOfHearts from './sprites/jack_of_hearts.png';
import queenOfHearts from './sprites/queen_of_hearts.png';
import kingOfHearts from './sprites/king_of_hearts.png';

import aceOfSpades from './sprites/ace_of_spades.png';
import twoOfSpades from './sprites/2_of_spades.png';
import threeOfSpades from './sprites/3_of_spades.png';
import fourOfSpades from './sprites/4_of_spades.png';
import fiveOfSpades from './sprites/5_of_spades.png';
import sixOfSpades from './sprites/6_of_spades.png';
import sevenOfSpades from './sprites/7_of_spades.png';
import jackOfSpades from './sprites/jack_of_spades.png';
import queenOfSpades from './sprites/queen_of_spades.png';
import kingOfSpades from './sprites/king_of_spades.png';

const SUITS = ['clubs', 'diamonds', 'hearts', 'spades'];

const RANKS = [
  { symbol: 'A', assetKey: 'ace' },
  { symbol: '2', assetKey: '2' },
  { symbol: '3', assetKey: '3' },
  { symbol: '4', assetKey: '4' },
  { symbol: '5', assetKey: '5' },
  { symbol: '6', assetKey: '6' },
  { symbol: '7', assetKey: '7' },
  { symbol: 'J', assetKey: 'jack' },
  { symbol: 'Q', assetKey: 'queen' },
  { symbol: 'K', assetKey: 'king' },
];

const SPRITES = {
  clubs: {
    ace: aceOfClubs,
    '2': twoOfClubs,
    '3': threeOfClubs,
    '4': fourOfClubs,
    '5': fiveOfClubs,
    '6': sixOfClubs,
    '7': sevenOfClubs,
    jack: jackOfClubs,
    queen: queenOfClubs,
    king: kingOfClubs,
  },
  diamonds: {
    ace: aceOfDiamonds,
    '2': twoOfDiamonds,
    '3': threeOfDiamonds,
    '4': fourOfDiamonds,
    '5': fiveOfDiamonds,
    '6': sixOfDiamonds,
    '7': sevenOfDiamonds,
    jack: jackOfDiamonds,
    queen: queenOfDiamonds,
    king: kingOfDiamonds,
  },
  hearts: {
    ace: aceOfHearts,
    '2': twoOfHearts,
    '3': threeOfHearts,
    '4': fourOfHearts,
    '5': fiveOfHearts,
    '6': sixOfHearts,
    '7': sevenOfHearts,
    jack: jackOfHearts,
    queen: queenOfHearts,
    king: kingOfHearts,
  },
  spades: {
    ace: aceOfSpades,
    '2': twoOfSpades,
    '3': threeOfSpades,
    '4': fourOfSpades,
    '5': fiveOfSpades,
    '6': sixOfSpades,
    '7': sevenOfSpades,
    jack: jackOfSpades,
    queen: queenOfSpades,
    king: kingOfSpades,
  },
};

const createDeck = () =>
  SUITS.flatMap((suit) =>
    RANKS.map(({ symbol, assetKey }) => ({
      suit,
      rank: symbol,
      image: SPRITES[suit][assetKey],
      hidden: true
    })),
  );

export default createDeck;
