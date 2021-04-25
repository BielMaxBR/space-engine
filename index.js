'use strict';
import Engine from './engine/engine.js'
import Planet from './engine/Planet.js';

const engine = new Engine({
  width: 300,
  height: 300,
  update: Update,
  setup: Setup,
  render: Render
})

const Vector = engine.Vector

let planeta = new Planet({
  tam: 30,
  mass: 30,
  color: '#ffaaff'
})

function Setup() {
  planeta.position = new Vector(100,100)
  planeta.aceleration = 0.01
  console.log(planeta)
}


function Update(delta) {
  planeta.update()
  
}

function Render() {
  this.clearCanvas()
  
  planeta.draw(this.ctx)

}

engine.init()