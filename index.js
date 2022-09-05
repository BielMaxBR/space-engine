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
window.engine = engine
let terra = new Planet({
  tam: 15,
  mass: 30,
  color: "rgb(100, 150, 200)"
})

let sol = new Planet({
  tam: 40,
  mass: 130,
  color: "yellow"
})

let lua = new Planet({
  tam: 5,
  mass: 5,
  color: "#aaaaaa"
})

function Setup() {
  
  terra.position = new Vector(250, 100)
  sol.position = new Vector(250, 250)
  lua.position = new Vector(250, 50)
  
  terra.velocity.x = 2.9
  lua.velocity.x = -2.6+terra.velocity.x

  
  terra.G = 11.7
  sol.G = 10
  
  this.append(terra)
  this.append(sol)
  this.append(lua)
}


function Update(delta) {

  terra.orbit(sol)
  lua.orbit(terra)
  lua.aceleration.add(terra.aceleration)
  
  terra.update()
  sol.update()
  lua.update()
  
  
}


engine.init()
