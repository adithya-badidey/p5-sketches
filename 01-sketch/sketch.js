class Circle {
  constructor(x, y, radius, movex, movey) {
    this.x = x
    this.y = y
    this.r = radius
    this.movex = movex
    this.movey = movey
  }



  processCollision(otherCircle) {
    var nextx = this.x + this.movex
    var nexty = this.y + this.movey

    var otherx = otherCircle.x + otherCircle.movex
    var othery = otherCircle.y + otherCircle.movey

    var mind = this.r + otherCircle.r
    console.log("Distances", distanceSq(nextx, nexty, otherx, othery), mind * mind)
    if( distanceSq(nextx, nexty, otherx, othery) < mind * mind ){ 
      var vol1 = this.r ** 2
      var vol2 = otherCircle.r ** 2
      this.movex = (this.movex * vol1 + otherCircle.movex * vol2)/(vol1+vol2)
      this.movey = (this.movey * vol1 + otherCircle.movey * vol2)/(vol1+vol2)
      this.r = (vol1 + vol2) ** 0.5
      return true
    }
    return false
  }

  move() {
    var nextx = this.x + this.movex
    var nexty = this.y + this.movey

    if (nextx + this.r*2 > width) {
      this.movex = -this.movex
      nextx = nextx + this.movex
    }
    if (nexty + this.r*2> height) {
      this.movey = -this.movey
      nexty = nexty + this.movey
    }
    if (nextx < 0) {
      this.movex = -this.movex
      nextx = nextx + this.movex
    }
    if (nexty < 0) {
      this.movey = -this.movey
      nexty = nexty + this.movey
    }

    this.x = nextx
    this.y = nexty
  }

  draw() {
    circle(this.x + this.r, this.y + this.r, this.r * 2)
  }
}

function distanceSq(x1, y1, x2, y2) {
  return (x1-x2)**2 + (y1-y2)**2
}

var circles = [new Circle(10,10,20,5,5), new Circle(100,200,20,3,5), new Circle(300,100,20,3,5)]
var width = 0
var height = 600

function updateContainerWidth() {
  var canvasDiv = document.getElementById('myCanvas')
  width = canvasDiv.offsetWidth;
}
function setup() {
  updateContainerWidth()
  height = 600
  var sketchCanvas = createCanvas(width, height)
  sketchCanvas.parent("myCanvas")
}

function draw() {
  console.log(circles)
  background(220)

  for (var i =0; i<circles.length; i++){
    if( circles[i] == null ) {
      continue
    }
    circles[i].draw()
    for (var j=i+1; j<circles.length; j++) {
      if( circles[j] == null ) {
        continue
      }
      result = circles[i].processCollision(circles[j])
      if( result == true ) {
        console.log("Result is true for ", circles[i], circles[j])
        delete circles[j]
      }
    }
    circles[i].move()
  }

  circles.rem
}

function windowResized() {
  updateContainerWidth()
  resizeCanvas(width, height)
}