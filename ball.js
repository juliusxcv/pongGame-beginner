var ballX = 600
var ballY = 300
var ballD = 10
var ballDirectionX = 1
var ballDirectionY = -1
var ballSpeed = 5

function setup() {
    createCanvas(windowWidth, windowHeight)

}
function draw() {
    background(0,50)
    noStroke()
    fill(255)
    //MOTION
    ballX = ballX + (ballDirectionX*ballSpeed)
    ballY = ballY + (ballDirectionY*ballSpeed)

    //BALL
    ellipse(ballX, ballY, ballD)

    if(ballX < 0 + ballD/2){
        ballDirectionX = ballDirectionX*-1
    }
    if(ballX > width - ballD/2){
        ballDirectionX = ballDirectionX*-1
    }
    if(ballY < 0 + ballD/2){
        ballDirectionY = ballDirectionY*-1
    }
    if(ballY > height - ballD/2){
        ballDirectionY = ballDirectionY*-1
    }
}