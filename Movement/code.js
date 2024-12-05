let canvas_element = document.getElementById("c");
let toolbox = canvas_element.getContext("2d");

document.body.addEventListener("keydown", onkeydown);

function onkeydown (e) {
    drawBackground (); 
    drawText (200, 200, e.key);
}

function drawBackground () {
    toolbox.fillStyle = "#000000";
    toolbox.fillRect(0, 0, 400, 400);
}

function drawText (x, y, text) {
    toolbox.font = "50px Arial";
    toolbox.textBaseline = "middle";
    toolbox.textAlign = "center";
    toolbox.fillStyle = "ff0000";
    toolbox.fillRect(text, x, y);
}