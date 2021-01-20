"use strict";
// setup the canvas...
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = 400;
canvas.height = 400;
var context = canvas.getContext("2d");
context.beginPath();
context.fillStyle = "#000000";
// begin a line from that point...
context.moveTo(15, 15);
context.lineTo(300, 150);
context.stroke();
context.closePath();
context.beginPath();
context.fillStyle = "#FF0000";
context.beginPath();
context.arc(15, 15, 5, 0, 2 * Math.PI);
context.fill();
context.closePath();

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {

}

var animate = function () {
    requestAnimationFrame(animate)

    render()
};

function render() {
}
animate();
