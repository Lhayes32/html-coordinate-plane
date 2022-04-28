const canvas = document.querySelector('#myCanvas');
const context = canvas.getContext('2d');

const radar = document.querySelector(".radar");

var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;
var coordX = 0;
var coordY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
    

    coordX = e.clientX - canvas.offsetLeft;
    coordY = e.clientY - canvas.offsetTop;
    //console.log(mouseX + " " + mouseY + " " + e.clientX + " " + e.clientY + " " + coordX + " " + coordY);
}

function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
} 

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "12px Arial";
    context.strokeText("Coordinates:(" + Math.floor(coordX / 3) + "," + Math.floor((coordY * -1) / 3) + ")", coordX + 300 , coordY + 300);
    requestAnimationFrame(update);
}
update();









