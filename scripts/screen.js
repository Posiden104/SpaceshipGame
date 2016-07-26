var airconsole;
var STATE = gameState.READY_UP;
var numPlayers = 0;
var playerStates;
var $messageBox;

function setupGame() {
    if(jQuery){
        $messageBox = $("#messageBox");
    } else {
    }
}

function setupConsole() {
    airconsole = new AirConsole();

    airconsole.onConnect = function(device_id) {
        if (STATE == gameState.READY_UP) {
            var deviceIds = airconsole.getControllerDeviceIds();
            numPlayers = deviceIds.size();
            airconsole.setActivePlayers(numPlayers);
            playerStates.push(playerState.NOT_READY);
            $messageBox.text(numPlayers);
        }
    };

    airconsole.onDisconnect = function(device_id) {
        var deviceIds = airconsole.getControllerDeviceIds();
        numPlayers = deviceIds.size();
        airconsole.setActivePlayers(numPlayers);
        playerStates.push(playerState.NOT_READY);
    };

    airconsole.onMessage = function(device_id, data) {
        var player = airconsole.convertDeviceIdToPlayerNumber(device_id);

        if ("ready" == data.ready) {
            playerStates[player] = playerState.READY;
            var ready = true;
            for (var p in playerStates) {
                if (playerStates[p] != playerState.READY) {
                    ready = false;
                }
            }
            if (ready) {
                STATE = gameState.PLAYING;
            }

            appendTextToElement($messageBox, "player " + player + " is ready!");

        } else if ("get_title" == data) {
            airconsole.message(device_id, playerStates[player]);
        }
    };
}

function loop() {
    // Basically says "draw the screen, and return to function 'loop' "
    requestAnimationFrame(loop);
}

$( document ).ready(function() {
    setupConsole();
    setupGame();
    //requestAnimationFrame(loop);
});
