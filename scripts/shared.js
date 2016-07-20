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
    var ele = document.createElement('DIV');
    ele.innerHTML = text;
    parent_ele.appendChild(ele);
};
