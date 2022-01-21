let circle = { // our circle object
  xPos: 25,
  yPos: 250,
  diameter: 50,
  colour: 255,
}

function setup() {
  createCanvas(500, 500);
  background(128);
  frameRate(10);
}

function draw() {
  drawCircle();

}

function drawCircle() {
  fill(circle.colour);
  ellipse(circle.xPos, circle.yPos, circle.diameter);
  circle.xPos += 50

  if (circle.xPos == 525) {
    ellipse(circle.xPos -= 500, circle.yPos, circle.diameter);
    circle.xPose += 50
    fill(circle.colour -= 20)

  }
}
