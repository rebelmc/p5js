
class Ufo {
  constructor() {
    this.ufo;
    this.x = 30;
    this.y = 30;
    this.xspeed = 10;
    this.yspeed = -1;
  }

  preload() {
    this.ufo = loadImage('assets/ufo.png');
  }

  setup() {
    createCanvas(windowWidth, windowHeight)
  }


  draw() {
    frameRate(60)
    clear()
    image(this.ufo, this.x, this.y, 300, 300)
    
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    
    if (this.x < 0 || this.x > windowWidth - 300) {
      this.xspeed = this.xspeed * -1; 
    }

    if (this.y < 0 || this.y > windowHeight - 300) {
      this.yspeed = this.yspeed * -1;  
    }
  }
}
