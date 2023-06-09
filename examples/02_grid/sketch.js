function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
}

function draw() {
  background(32);
  strokeWeight(random(0.01,10));
  stroke(random(150,255), random(150,255), random(150,255));

  let rndFactor = random(1,50)
  
  // lower-left
  line(0, 0, width * .1+ rndFactor, height);
  line(0, height * .1+ rndFactor, width * .2+ rndFactor, height);
  line(0, height * .2+ rndFactor, width * .3+ rndFactor, height);
  line(0, height * .3+ rndFactor, width * .4+ rndFactor, height);
  line(0, height * .4+ rndFactor, width * .5+ rndFactor, height);
  line(0, height * .5+ rndFactor, width * .6+ rndFactor, height);
  line(0, height * .6+ rndFactor, width * .7+ rndFactor, height);
  line(0, height * .7+ rndFactor, width * .8+ rndFactor, height);
  line(0, height * .8+ rndFactor, width * .9+ rndFactor, height);
  line(0, height * .9+ rndFactor, width, height);

  // upper-right
  line(width * .9+ rndFactor, 0, width, height);
  line(width * .8+ rndFactor, 0, width, height * .9+ rndFactor);
  line(width * .7+ rndFactor, 0, width, height * .8+ rndFactor);
  line(width * .6+ rndFactor, 0, width, height * .7+ rndFactor);
  line(width * .5+ rndFactor, 0, width, height * .6+ rndFactor);
  line(width * .4+ rndFactor, 0, width, height * .5+ rndFactor);
  line(width * .3+ rndFactor, 0, width, height * .4+ rndFactor);
  line(width * .2+ rndFactor, 0, width, height * .3+ rndFactor);
  line(width * .1+ rndFactor, 0, width, height * .2+ rndFactor);
  line(0, 0, width, height * .1+ rndFactor);  
}
