'use strict';
import Engine from './engine/Engine.js'
import Planet from './engine/Planet.js';

const engine = new Engine({
  width: 500,
  height: 500,
  update: Update,
  setup: Setup
})

const Vector = engine.Vector

let planeta = new Planet({
  tam: 10,
  mass: 30,
  //color: "rgb(255, 50, 255)"
})

function Setup() {
  planeta.position = new Vector(100,100)

  console.log(planeta.color)
  this.append(planeta)
}


function Update(delta) {
  planeta.applyForce(new Vector(1,0))
  planeta.update()
  planeta.tam = planeta.velocity.x
  
  if (planeta.position.x-planeta.tam > this.width) {
    planeta.position.x = -(planeta.tam*2)
  }
  
}


engine.init()