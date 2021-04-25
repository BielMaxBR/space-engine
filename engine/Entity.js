import Vector from "./Vector.js"

export default class Entity {
  constructor(ctx, position, velocity, aceleration) {
    this.ctx = ctx ? ctx : null

    this.position = position ? position : new Vector(0,0)
    
    this.velocity = velocity ? velocity : new Vector(0,0)
    
    this.aceleration = aceleration ? aceleration : new Vector(0,0)
  }

  draw() {}
  
  update(delta) {}

}