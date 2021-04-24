import Vector from "./Vector.js"

export default function(){
    this.location = new Vector(0,0)
    this.draw = (ctx) => {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(this.location.x,this.location.y,10,10)
    }
}