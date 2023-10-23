var rect1X = 100
var rect1Y = 200
var rect1W = 100
var rect1H = 100
var rectMove = 10

//RECT2 BARRIER
var rect2X = 400
var rect2Y = 600
var rect2W = 50
var rect2H = 50


function setup() {
    createCanvas(windowWidth, windowHeight)

}
function draw() {
    keyPressed()
    rectMode(CENTER)
    background(0,50)
    noStroke()
    fill(255)
    
    rect(rect1X, rect1Y, rect1W, rect1H)

    //RECT BOUNDARIES
    if(rect1X < 0 + rect1W/2){
        rect1X = rect1X + rectMove
      }
      if(rect1X > width - rect1W/2){
        rect1X = rect1X - rectMove
      }
      if(rect1Y < 0 + rect1H/2){
        rect1Y = rect1Y + rectMove
      }
      if(rect1Y > height - rect1H/2){
        rect1Y = rect1Y - rectMove
      }

    //BARRIER
    fill(255,0,0)
    rect(rect2X, rect2Y, rect2W, rect2H)
    if(rect1X > rect2X-rect2W-rect2W/2 && rect1X < rect2X+rect2W+rect2W/2 && rect1Y > rect2Y-rect2H-rect2H/2 && rect1Y < rect2Y+rect2H+rect2H/2 ){
      rectMove = rectMove*-1
    }else{
      rectMove = 5
    }


}

function keyPressed(){
    //MOVE UP
    if(keyCode == UP_ARROW && keyIsPressed){
      rect1Y = rect1Y-rectMove
    }
  //MOVE DOWN
    if(keyCode == DOWN_ARROW && keyIsPressed){
      rect1Y = rect1Y + rectMove
    }
  //MOVE LEFT
    if(keyCode == LEFT_ARROW && keyIsPressed){
      rect1X = rect1X - rectMove
    }
  //MOVE RIGHT
    if(keyCode == RIGHT_ARROW && keyIsPressed){
      rect1X = rect1X + rectMove
    }
}