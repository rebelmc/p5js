let timer = 0
let waitTime = 500
let index = 0;

const list = [
  new Ufo(),  new Grid()
 ]


function setup() {
  createCanvas(windowWidth, windowHeight) 

  for (i = 0; i < list.length; i++) {
    list[i].preload()
    list[i].setup()
  }
}


function draw() {
  console.log(index)
  list[index].draw()

  while(millis() >= timer + waitTime){
    waitTime = random(0,2000)
    console.log("Change sketch")
    timer = millis();
    index = (index + 1) % list.length
  }
}


