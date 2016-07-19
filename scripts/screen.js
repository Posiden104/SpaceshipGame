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
        if (player != undefined && data.move !== undefined) {
            document.getElementById("parag").innerHTML = data.move;

            if (p_height >= 650 && data.move != 0) {
                vspd = -50;
            }

            for (var i = 0; i < 2; i++) {
                var box = document.getElementById("shape" + i);
                if (data.move != 0) {
                    box.style.background = "#0000FF";

                } else {
                    box.style.background = "#FF0000";
                }
            }

        }
    };
}

function createWall(position, top, left, width, height, color) {
    var wall = document.createElement("DIV");
    wall.style.position = position;
    wall.style.top = top;
    wall.style.left = left;
    wall.style.width = width;
    wall.style.color = color;
    return wall;
}

function jumpingCalcs() {
    vspd += 2;
    vspd = Math.min(vspd, 0);
    p_height += vspd;

    if (p_height < 650) {
        hangTime += .1;
        p_height += (1 * grav * hangTime);
    } else {
        hangTime = 0;
    }

    if (p_height > 650) {
        p_height = 650;
    }
    scrn_player.style.top = p_height + 'px';
    document.getElementById("parag").innerHTML = p_height;
}

function loop() {
    jumpingCalcs();

    var rnd = Math.floor((Math.random() * 100) + 1);

    if (rnd < 20) {
        var wall = createWall('absolute', '550px', '100px', '100px', '150px', 'orange');
        walls.push(wall);
        appendTextToElement(document.getElementById("parag"), "wall created");
    }

    for (var i = 0; i < walls.length; i++) {
        var pos = walls[i].style.offsetLeft;
        walls[i].style.left = (pos - 10) + 'px';
    }

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
