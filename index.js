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
    size: 15,
    mass: 30,
    color: "rgb(100, 150, 200)"
})

let lua = new Planet({
    size: 5,
    mass: 5,
    color: "#aaaaaa"
})

function Setup() {

    terra.position = new Vector(200, 250)
    lua.position = new Vector(300, 250)


    this.append(terra)
    this.append(lua)

    terra.velocity.x = 2
    lua.velocity.x = -2
    //   lua.setOrbitTo(terra)
}


function Update(delta) {
    terra.update()
    lua.update()
    if (terra.colidesTo(lua)) {
        console.log(terra.velocity.toArray())
        terra.velocity.x = 0
        lua.velocity.x = 0
        terra.applyForce(lua.velocity)
        lua.applyForce(terra.velocity)
        terra.update()
        lua.update()
    }
}


engine.init()
