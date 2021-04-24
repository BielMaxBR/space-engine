import Vector from "./Vector.js"

export default function(){
    this.position = new Vector(0,0)
    
    this.velocity = new Vector(0,0)
    
    this.aceleration = new Vector(0,0)
    
    this.draw = (ctx) => {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(this.position.x,this.position.y,10,10)
    }
    
    this.update = () => {
      this.velocity.add(this.aceleration)
      this.position.add(this.velocity)
    }
}