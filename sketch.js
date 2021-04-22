var a = 0
function setup() {
  createCanvas(300, 300);
  //rect(0,0,10,10)
}

function draw() {
  background(0)
  rect(a,0,10,10)
  a+=1
  if ( a > width ) {
    a = -10
  }
}