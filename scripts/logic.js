var airconsole;

function pickRoles(numPlayers) {
    //pick random player to be captain
    var captian = Math.floor(Math.random() * numPlayers);
    for(var i = 0; i < numPlayers; i++){
        airconsole.message(airconsole.convertPlayerNumberToDeviceId(i), i == captian ? {"role": "captian"} : {"role": "officer"});
    }
}
