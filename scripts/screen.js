var airconsole;

function setupGame() {

}

function setupConsole() {
    airconsole = new AirConsole();

    airconsole.onConnect = function(device_id) {
        airconsole.setActivePlayers(2);
    };

    airconsole.onDisconnect = function(device_id) {

    };

    airconsole.onMessage = function(device_id, data) {
        var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
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
