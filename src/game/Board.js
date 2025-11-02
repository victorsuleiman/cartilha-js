import React from 'react';

export function CartilhaPlayground({ ctx, G, moves }) {

    let playersDiv = [];
    G.players.forEach(player => {
        playersDiv.push(<div class="player" id={player.playerID}>Here's a Player:
            PlayerName: {player.playerName},
            PlayerID: {player.playerID},
            score: {player.score},
            bet: {player.bet},
            first card: <img src={[player.cards[0].image]} width="80" height="120"></img>
        </div>)
    });

    return (
        <div className="playground">
            <div className="players">
                List of Players:
                {playersDiv}
            </div>
            <div className="board">
                Vira: <img src={G.vira.image} width="80" height="120" alt="Vira" />
            </div>
        </div>
    );

}