import hiddenImg from './sprites/red back.png';

const createCard = (value, suit, rank, nextRank, frontImage, visible = true) => ({
    value,
    suit,
    rank,
    nextRank,
    frontImage,
    visible,
    backImage: hiddenImg,
});

export const getCardImage = (card) =>
    card.visible ? card.frontImage : card.backImage;

export default createCard;
