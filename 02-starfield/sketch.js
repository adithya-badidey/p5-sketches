let stars = [];

let speed = 0.1

function setup() {
    createCanvas(600,600)
    for(let i=0; i<100; i++) {
        stars[i] = new Star()
    }
    speed = 0.1
}

function draw() {
    speed = map(mouseX, 0, width, 0, 1);
    background(0);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
}