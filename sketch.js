numBalls = 500
minBallSize = 20
maxBallSize = 50
fr = 30
speed = 0.03
mouseWasClicked = false

function setup() {
    createCanvas(600, 400);
    frameRate(30)
    x = new Array(numBalls)
    y = new Array(numBalls)
    r = new Array(numBalls)
    for (i = 0; i < numBalls; i++) {
        x[i] = map(Math.random(), 0, 1, 0, width)
        y[i] = map(Math.random(), 0, 1, 0, height)
        r[i] = map(Math.random(), 0, 1, minBallSize, maxBallSize)
    }
}

function draw() {
    background(220);
    fill('red')
    for (i = 0; i < numBalls; i++) {
        ellipse(x[i], y[i], r[i], r[i])
        if (!mouseWasClicked) {
            y[i] += r[i] * speed
            if (y[i] - r[i] > height) {
                r[i] = map(Math.random(), 0, 1, minBallSize, maxBallSize)
                x[i] = map(Math.random(), 0, 1, 0, width)
                y[i] = - r[i]

            }
        }
    }
}
function mouseClicked() {
    mouseWasClicked = !mouseWasClicked
}