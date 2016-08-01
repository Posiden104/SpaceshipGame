var gameState = {
    READY_UP: 0,
    PLAYING: 1
};
var playerState = {
    NOT_READY: 0,
    READY: 1,
    CAPTIAN: 2,
    OFFICER: 3
};

var appendTextToElement = function(parent_ele, text) {
    var x = document.createElement("P"); // Create a <p> node
    var t = document.createTextNode(text); // Create a text node
    x.appendChild(t); // Append the text to <p>
    parent_ele.appendChild(x);
};
