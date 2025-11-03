import React from 'react';
import { getCardImage } from './Card';

export function CartilhaPlayground({ ctx, G, playerID, moves }) {

    const viewerID = playerID ?? '0'; // ensure it’s a string, if the value is null prob a spectator
    let playersDiv = [];

    G.players.forEach(player => {
        const isViewer = String(player.playerID) === viewerID;
        playersDiv.push(<div className="player" key={player.playerID}>
            PlayerName: {player.playerName},
            PlayerID: {player.playerID},
            score: {player.score},
            bets remaining: {player.bet}
            <div className="player-cards">
                {player.cards.map((card, i) => (
                    <img
                        key={`${player.playerID}-${i}`}
                        className="player-card"
                        src={isViewer ? getCardImage(card) : card.backImage}
                        width="80"
                        height="120"
                        alt={`${card.rank} of ${card.suit}`}
                        onClick={() => isViewer && moves.playCard(i, player.playerID)}
                    />
                ))}
            </div>
        </div>)
    });

    let boardDiv = (
        <div className="board">
            Vira: <img className="vira" src={G.vira.frontImage} width="80" height="120" alt="Vira" />
            <div className="played-cards">
                Played Cards:
                {G.board.map((card, i) => (
                    <img
                        key={i}
                        src={getCardImage(card)}
                        width="80"
                        height="120"
                        alt={`${card.rank} of ${card.suit}`}
                    />
                ))}
            </div>
        </div>
    )

    return (
        <div className="playground">
            <div className="players">
                List of Players:
                {playersDiv}
            </div>
            {boardDiv}
        </div>
    );

}