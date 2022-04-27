var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

document.getElementById("myCanvas").addEventListener("mousemove", function(e) {
    cnvs_getCoordinates(e);
  });

function cnvs_getCoordinates(e)
{
    x=e.clientX;
    y=e.clientY;
    document.getElementById("xycoordinates").innerHTML="<p>Coordinates:(" + x + "," + y + ")<p>";
}

function cnvs_clearCoordinates()
{
    document.getElementById("xycoordinates").innerHTML="";
}

const canvas2 = document.querySelector('canvas')
const ctx2 = canvas.getContext('2d')

$(document).bind('mousemove', function(e){
    $('#xycoordinates').css({
        left: e.pageX + 5,
        top: e.pageY - 20
    });
});





