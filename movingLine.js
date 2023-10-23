let y

function setup() {
    createCanvas(windowWidth, windowHeight)
    stroke(255)
    y = height/2

}

function draw(){
    background(0)
    line(0,y, width, y)
    y = y - 1.2
    if (y < 0) {
        y = height
    }


}