let circleY = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(60);
}

function draw() {
  // clear out old frames
  background(32);

  circle(100, circleY, 90);

  circleY += 1;
}

