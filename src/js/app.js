// let cursor = document.querySelector('.cursor');

// let mouse = {
//     x: 0,
//     y: 0,
//     moveX: 0,
//     moveY: 0,
//     lastposX: 0,
//     lastposY: 0
// }
// let currentTranslateX = 0;
// let currentTranslateY = 0;

// let lastTranslateX = 0;
// let lastTranslateY = 0;

// let speedX = 0;
// let speedY = 0;

// let spring = 0.9;

// let dx1;
// let dy1;


// document.addEventListener("mousemove", function (e) {
//     mouse.x = e.offsetX;
//     mouse.y = e.offsetY;

//     if (mouse.lastposX > 0 && mouse.lastposY > 0) {
//         mouse.moveX = (mouse.lastposX - mouse.x);
//         mouse.moveY = (mouse.lastposY - mouse.y);
//         speedX += mouse.moveX / 10;
//         speedY += mouse.moveY / 10;
//     }
    
// });


// function render() {

//     speedX *= 0.9;
//     speedY *= 0.9;

//     let dx = mouse.lastposX - mouse.x;
//     speedX += (dx * 0.8);
//     let dy = mouse.lastposY - mouse.y;
//     speedY += (dy * 0.8);

//     currentTranslateX = mouse.x + speedX
//     currentTranslateY = mouse.y + speedY

//     dy1 = currentTranslateY - lastTranslateY;
//     dx1 = currentTranslateX - lastTranslateX;
//     speedX += (dx1 *.85)
//     speedY += (dy1 *.85)
    
//     cursor.style.transform = "translate(" + currentTranslateX + "px," + currentTranslateY + "px) translate(-50%, -50%) scaleX(" + 1 + ")";

//     mouse.lastposY = mouse.y;
//     mouse.lastposX = mouse.x;

//     lastTranslateX = currentTranslateX;
//     lastTranslateY = currentTranslateY;

//     requestAnimationFrame(render)
// }

// render();


import Ccursor from "./ccursor"

new Ccursor({
    cursor : ".cursor",
    spring: 0.9,
    friction: 0.95,
    kinet: 0.9,
    deformation: 2
})




















// function render() {
//     speedX *= 0.9;
//     speedY *= 0.9;

//     currentTranslateX = mouse.x + speedX
//     currentTranslateY = mouse.y + speedY


//     mouse.lastposY = mouse.y;
//     mouse.lastposX = mouse.x;

//     let scale = Math.sqrt(speedX*speedX + speedY*speedY)
//     if(scale > 1){
//         scale = 1;
//     }
//     cursor.style.transform = "translate(" + currentTranslateX + "px," + currentTranslateY + "px) translate(-50%, -50%) scale("+ scale +")";

//     requestAnimationFrame(render)
// }

// render();