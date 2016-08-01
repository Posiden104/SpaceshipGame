var airconsole;
var readyCheck;
var parag;
var controller_state = {
    "ready": false,
    "officer": false,
    "captain": false
};
/**
 * Sets up the communication to the screen.
 */
function init() {
    airconsole = new AirConsole({
        'orientation': 'portrait'
    });

    readyCheck = document.getElementById("readyButton");
    parag = document.getElementById("parag");

    airconsole.setCustomDeviceState(controller_state);

    /*
     * Checks if this device is part of the active game.
     */
    airconsole.onActivePlayersChange = function(player) {
        if (player !== undefined) {
            parag.innerHTML = "";
            appendTextToElement(parag, "player " + airconsole.convertDeviceIdToPlayerNumber(airconsole.getDeviceId()));
        }
    };

    airconsole.onMessage = function(from, data) {
        appendTextToElement(parag, "message received from " + from);
    };

    $('#readyButton').change(function() {
        if ($(this).prop('checked')) {
            airconsole.setCustomDeviceStateProperty("ready", true);
        } else {
            airconsole.setCustomDeviceStateProperty("ready", false);
        }
    });
}

function btnPressed(row, col) {
    alert(row + ", " + col);
    airconsole.message(AirConsole.SCREEN, {
        operation: "amount"
    });
}
