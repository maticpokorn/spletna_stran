numBalls = 100
width = 600
height = 400
minBallSize = 5
maxBallSize = 10
fr = 30
speed = 0.1

function setup() {
    let myCanvas = createCanvas(width, height);
    myCanvas.parent('myContainer');
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
        y[i] += r[i] * speed
        if (y[i] > height) {
            x[i] = map(Math.random(), 0, 1, 0, width)
            y[i] = 0
            r[i] = map(Math.random(), 0, 1, minBallSize, maxBallSize)
        }
    }

}