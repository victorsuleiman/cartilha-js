import React from 'react';

//<img src={[player.cards[0].image]} width="80" height="120"></img>

export function CartilhaPlayground({ ctx, G, moves }) {

    let playersDiv = [];
    G.players.forEach(player => {

        playersDiv.push(<div className="player" key={player.playerID}>
            PlayerName: {player.playerName},
            PlayerID: {player.playerID},
            score: {player.score},
            bet: {player.bet}
            <div className="player-cards">
                {player.cards.map((card, i) => (
                    <img
                        key={`${player.playerID}-${i}`}
                        className="player-card"
                        src={card.image}
                        width="80"
                        height="120"
                        alt={`${card.rank} of ${card.suit}`}
                        onClick={() => moves.playCard(i, player.playerID)}
                    />
                ))}
            </div>
        </div>)
    });


    return (
        <div className="playground">
            <div className="players">
                List of Players:
                {playersDiv}
            </div>
            <div className="board">
                Vira: <img className="vira" src={G.vira.image} width="80" height="120" alt="Vira" />
            </div>
        </div>
    );

}