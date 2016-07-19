var airconsole;

var p_height;
var scrn_player;
var grav;
var vspd;
var hangTime;

var walls = [];

function setupGame() {
    p_height = 100;
    scrn_player = document.getElementById("player");
    grav = 10;
    vspd = 0;
    hangTime = 0;
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
