let ufo;

let x = 30;
let y = 30;
let xspeed = 10;
let yspeed = -1;

function preload() {
  ufo = loadImage('assets/ufo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  clear()
  image(ufo, x, y, 300, 300)
  
  x = x + xspeed;
  y = y + yspeed;
  
  if (x < 0 || x > width - 300) {
    xspeed = -xspeed; 
  }

  if (y < 0 || y > height - 300) {
    yspeed = -yspeed;  
  }
}
