var airconsole;
var STATE = gameState.READY_UP;
var numPlayers = 0;
var messageBox;

function setupGame() {
    messageBox = document.getElementById("messageBox");
}

function setupConsole() {
    airconsole = new AirConsole();

    airconsole.onConnect = function(device_id) {
        if (STATE == gameState.READY_UP) {
            var deviceIds = airconsole.getControllerDeviceIds();
            numPlayers = deviceIds.length;
            airconsole.setActivePlayers(numPlayers);
            appendTextToElement(messageBox, "Players connected: " + numPlayers);
        } else {
            // game is in running mode
        }
    };

    airconsole.onDisconnect = function(device_id) {
        var deviceIds = airconsole.getControllerDeviceIds();
        numPlayers = deviceIds.size();
        airconsole.setActivePlayers(numPlayers);
        playerStates.push(playerState.NOT_READY);
    };

    airconsole.onCustomDeviceStateChange = function(device_id, custom_data) {
        var deviceIds = airconsole.getActivePlayerDeviceIds();
        messageBox.innerHTML = "";
        //appendTextToElement(messageBox, "Player state change: " + airconsole.convertDeviceIdToPlayerNumber(device_id) + ": " + custom_data.ready);
        if (STATE == gameState.READY_UP) {
            var flag = true;
            for (var id in deviceIds) {
                if (!airconsole.getCustomDeviceState(deviceIds[id]).ready) {
                    var notReady = "Player " + airconsole.convertDeviceIdToPlayerNumber(deviceIds[id]) + " is not ready";
                    appendTextToElement(messageBox, notReady);
                    flag = false;
                    break;
                } else {
                    var Ready = "Player " + airconsole.convertDeviceIdToPlayerNumber(deviceIds[id]) + " is ready";
                    appendTextToElement(messageBox, Ready);
                }
            }

            if (flag) {
                STATE = gameState.PLAYING;
                messageBox.innerHTML = "";
                appendTextToElement(messageBox, "Playing!");
            }
        }
    };

    airconsole.onMessage = function(device_id, data) {
        appendTextToElement(messageBox, "message received");
        var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
    };
}

function loop() {
    // Basically says "draw the screen, and return to function 'loop' "
    requestAnimationFrame(loop);
}

$(document).ready(function() {
    setupConsole();
    setupGame();
    //requestAnimationFrame(loop);
});
