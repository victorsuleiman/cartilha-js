const player = (playerName, playerID, score, bet, cards ) => ({
    playerName,
    playerID,
    score,
    bet,
    cards,
})

const createPlayers = []
createPlayers.push(player("Thomas",0,0,0,[]))
createPlayers.push(player("Fernando",1,0,0,[]))

export default createPlayers;