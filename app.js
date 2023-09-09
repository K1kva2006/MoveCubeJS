const container = document.getElementById("container");
const box = document.getElementById("box");

const upArrow = document.getElementById("upArrow");
const leftArrow = document.getElementById("leftArrow");
const downArrow = document.getElementById("downArrow");
const rightArrow = document.getElementById("rightArrow");

let X = -25;
let Y = -25;
let Speed = 8;

let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;

let borderUP = container.getBoundingClientRect().height / 2 - 10;
let borderDOWN = container.getBoundingClientRect().height / 2 - 62;
let borderLEFT = container.getBoundingClientRect().width / 2 - 10;
let borderRIGHT = container.getBoundingClientRect().width / 2 - 62;

function isKeyDown(e) {
    if (e.key == "w") {
        moveUp = true;
    }
    if (e.key == "s") {
        moveDown = true;
    }
    if (e.key == "a") {
        moveLeft = true;
    }
    if (e.key == "d") {
        moveRight = true;
    }
}
function isKeyUp(e) {
    if (e.key == "w") {
        moveUp = false;
    }
    if (e.key == "s") {
        moveDown = false;
    }
    if (e.key == "a") {
        moveLeft = false;
    }
    if (e.key == "d") {
        moveRight = false;
    }
}
function check() {
    if (moveUp && -Y < borderUP) {
        Y -= Speed;
        box.style.background = "red";
    }
    if (moveDown && Y < borderDOWN) {
        Y += Speed;
        box.style.background = "blue";
    }
    if (moveLeft && -X < borderLEFT) {
        X -= Speed;
        box.style.background = "green";
    }
    if (moveRight && X < borderRIGHT) {
        X += Speed;
        box.style.background = "purple";
    }
}
function movement() {
    document.addEventListener("keydown", isKeyDown);

    document.addEventListener("keyup", isKeyUp);

    check();

    box.style.transform = `translate(${X}px, ${Y}px)`;
}

// For mobile

function isKeyDownMobile(e) {
    if (e.target == upArrow) {
        moveUp = true;
    }
    if (e.target == downArrow) {
        moveDown = true;
    }
    if (e.target == leftArrow) {
        moveLeft = true;
    }
    if (e.target == rightArrow) {
        moveRight = true;
    }
}

function isKeyUpMobile(e) {
    if (e.target == upArrow) {
        moveUp = false;
    }
    if (e.target == downArrow) {
        moveDown = false;
    }
    if (e.target == leftArrow) {
        moveLeft = false;
    }
    if (e.target == rightArrow) {
        moveRight = false;
    }
}

function movementMobile() {
    document.addEventListener("touchstart", isKeyDownMobile);

    document.addEventListener("touchend", isKeyUpMobile);

    check();

    box.style.transform = `translate(${X}px, ${Y}px)`;
}


// RUN CODE 

if (window.innerWidth > 1039) {
    function update() {
        movement();
        requestAnimationFrame(update);
    }
    window.addEventListener("load", update);
} else {
    function updateMobile() {
        movementMobile();
        requestAnimationFrame(updateMobile);
    }
    window.addEventListener("load", updateMobile);
}
