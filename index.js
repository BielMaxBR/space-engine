'use strict';
import Engine from './engine/Engine.js'
import Planet from './engine/Planet.js';

const engine = new Engine({
  width: 500,
  height: 500,
  update: Update,
  setup: Setup,
  render: Render
})

const Vector = engine.Vector

let planeta = new Planet({
  tam: 10,
  mass: 30,
  color: '#ffaaff'
})

function Setup() {
  planeta.position = new Vector(100,100)
  planeta.aceleration.x = 0.01
  console.log(planeta)
}


function Update(delta) {
  planeta.update()
  planeta.tam = planeta.velocity.x
  
  if (planeta.position.x-planeta.tam > this.width) {
    planeta.position.x = -(planeta.tam*2)
  }
  
}

function Render() {
  this.clearCanvas()
  
  planeta.draw(this.ctx)

}

engine.init()