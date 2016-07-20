var airconsole;
var STATE = gameState.READY_UP;
var numPlayers = 0;
var playerStates;

function setupGame() {

}

function setupConsole() {
    airconsole = new AirConsole();

    airconsole.onConnect = function(device_id) {
        if (STATE == gameState.READY_UP) {
            var deviceIds = airconsole.getControllerDeviceIds();
            numPlayers = deviceIds.size();
            airconsole.setActivePlayers(numPlayers);
        }
    };

    airconsole.onDisconnect = function(device_id) {

    };

    airconsole.onMessage = function(device_id, data) {
        var player = airconsole.convertDeviceIdToPlayerNumber(device_id);

        if("ready" == data){
            playerStates[player] = playerState.READY;
        } else if("get_title" == data){
            airconsole.message(device_id, playerStates[player]);
        }
    };
}

function loop() {
    // Basically says "draw the screen, and return to function 'loop' "
    requestAnimationFrame(loop);
}

/**
 * body.onload function.
 */
function init() {
    setupConsole();
    setupGame();
    requestAnimationFrame(loop);
}
