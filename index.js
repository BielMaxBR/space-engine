const canvas = document.getElementById("screen")
const ctx = canvas.getContext('2d')
canvas.width = 300
canvas.height = 300
var a = 0
function update() {
  ctx.clearRect(0,0,300,300)
  ctx.fillStyle = "#ffffff"
  ctx.fillRect(a,0,10,10)
  a+=1
  if(a>canvas.width) {
    a=-10
  }
  setTimeout(update, 1000/30)
}
update()