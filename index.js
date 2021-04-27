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

let planeta1 = new Planet({
  tam: 10,
  mass: 30,
  color: "rgb(200, 200, 200)"
})

let planeta2 = new Planet({
  tam: 20,
  mass: 130,
  color: "rgb(240, 240, 240)"
})


function Setup() {
  planeta1.position = new Vector(250, 100)
  planeta2.position = new Vector(250, 250)
  planeta1.velocity.x = 2

  planeta1.G = 10
  planeta2.G = 10
  
  this.append(planeta1)
  this.append(planeta2)
}


function Update(delta) {

  let f2to1 = planeta2.calculateAttraction(planeta1)
  
  planeta1.applyForce(f2to1)
  
  planeta1.update()
  planeta2.update()
}


engine.init()