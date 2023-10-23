function setup() {
    createCanvas(windowWidth, windowHeight)
    strokeWeight(0)
    stroke(255)

}

function draw(){
    R = mouseX/2
    background(R, 120,120)
    fill(0)

    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 100,100)
    } else {
        ellipse(mouseX, mouseY, 10, 10)
    }

}