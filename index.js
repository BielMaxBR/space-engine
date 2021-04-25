'use strict';
import Engine from './engine/engine.js'

const engine = new Engine({
  width: 300,
  height: 300,
  update: Update,
  setup: Setup,
  render: Render
})

const Vector = engine.Vector
const obj = new engine.Entity()

function Setup() {
  obj.aceleration.x = 0.01
  
  console.log(Vector)
}


function Update(delta) {
  
  obj.update()
  obj.velocity.limit(6)
  if(obj.position.x > this.width) {
    obj.position.x = -10
    //console.log(obj.velocity.x)
  }
}

function Render() {
  this.clearCanvas()
  
  obj.draw(this.ctx)
}

engine.init()