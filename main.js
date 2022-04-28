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
    context.font = "10px Arial";

    // Quadrent 1, higher than 70 x/y
    // ((Math.floor(coordX / 3)) > 0 && Math.floor((coordY * -1) / 3) > 0)
    if (((Math.floor(coordX / 3)) >= 0 && Math.floor((coordY * -1) / 3) >= 70) || ((Math.floor(coordX / 3)) >= 70 && Math.floor((coordY * -1) / 3) >= 0)) {
        context.strokeText("C:(" + Math.floor(coordX / 3) + "," + Math.floor((coordY * -1) / 3) + ")", (coordX + 300) - 40, coordY + 300 + 30);
    }

    // Quadrent 2, lower than -70 x and higher than 70 y
    // ((Math.floor(coordX / 3)) < 0 && Math.floor((coordY * -1) / 3) > 0)
    else if ((((Math.floor(coordX / 3)) <= 0) && (Math.floor((coordY * -1) / 3) >= 70)) || (((Math.floor(coordX / 3)) <= -70) && (Math.floor((coordY * -1) / 3) >= 0))){
        context.strokeText("C:(" + Math.floor(coordX / 3) + "," + Math.floor((coordY * -1) / 3) + ")", (coordX + 300) , coordY + 300 + 30);
    }

    // if in quadrent 3
    // ((Math.floor(coordX / 3)) < 0 && Math.floor((coordY * -1) / 3) < 0)
    else if ((((Math.floor(coordX / 3)) <= 0) && (Math.floor((coordY * -1) / 3) <= -70)) || (((Math.floor(coordX / 3)) <= -70) && (Math.floor((coordY * -1) / 3) <= 0))) {
        context.strokeText("C:(" + Math.floor(coordX / 3) + "," + Math.floor((coordY * -1) / 3) + ")", (coordX + 300), coordY + 300 );
    }

    // if in quadrent 4 and other locations
    else {
        context.strokeText("C:(" + Math.floor(coordX / 3) + "," + Math.floor((coordY * -1) / 3) + ")", (coordX + 300) - 40 , coordY + 300);
    }

    // need to add x / y axis 
    // need to change this so it only does this when outside a certain range (x/y > 60)

    requestAnimationFrame(update);
}
update();









