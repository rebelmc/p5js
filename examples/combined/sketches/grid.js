 
 class Grid {
  constructor() {
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
  }

  preload() {

  }

  draw() {
    frameRate(10)
    background(32);
    strokeWeight(random(0.1,10));
    stroke(random(100,255), random(100,255), random(100,255));

    this.rndFactor = random(1,50)
    
    // lower-left
    line(0, 0, windowWidth * .1+ this.rndFactor, windowHeight);
    line(0, windowHeight * .1+ this.rndFactor, windowWidth * .2+ this.rndFactor, windowHeight);
    line(0, windowHeight * .2+ this.rndFactor, windowWidth * .3+ this.rndFactor, windowHeight);
    line(0, windowHeight * .3+ this.rndFactor, windowWidth * .4+ this.rndFactor, windowHeight);
    line(0, windowHeight * .4+ this.rndFactor, windowWidth * .5+ this.rndFactor, windowHeight);
    line(0, windowHeight * .5+ this.rndFactor, windowWidth * .6+ this.rndFactor, windowHeight);
    line(0, windowHeight * .6+ this.rndFactor, windowWidth * .7+ this.rndFactor, windowHeight);
    line(0, windowHeight * .7+ this.rndFactor, windowWidth * .8+ this.rndFactor, windowHeight);
    line(0, windowHeight * .8+ this.rndFactor, windowWidth * .9+ this.rndFactor, windowHeight);
    line(0, windowHeight * .9+ this.rndFactor, windowWidth, windowHeight);

    // upper-right
    line(windowWidth * .9+ this.rndFactor, 0, windowWidth, windowHeight);
    line(windowWidth * .8+ this.rndFactor, 0, windowWidth, windowHeight * .9+ this.rndFactor);
    line(windowWidth * .7+ this.rndFactor, 0, windowWidth, windowHeight * .8+ this.rndFactor);
    line(windowWidth * .6+ this.rndFactor, 0, windowWidth, windowHeight * .7+ this.rndFactor);
    line(windowWidth * .5+ this.rndFactor, 0, windowWidth, windowHeight * .6+ this.rndFactor);
    line(windowWidth * .4+ this.rndFactor, 0, windowWidth, windowHeight * .5+ this.rndFactor);
    line(windowWidth * .3+ this.rndFactor, 0, windowWidth, windowHeight * .4+ this.rndFactor);
    line(windowWidth * .2+ this.rndFactor, 0, windowWidth, windowHeight * .3+ this.rndFactor);
    line(windowWidth * .1+ this.rndFactor, 0, windowWidth, windowHeight * .2+ this.rndFactor);
    line(0, 0, windowWidth, windowHeight * .1+ this.rndFactor);  
  }
}
