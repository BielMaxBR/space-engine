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
    mass: 1,
    color: "#aaaaaa"
})

function Setup() {

    terra.position = new Vector(200, 200)
    lua.position = new Vector(300, 300)


    this.append(terra)
    this.append(lua)

    terra.velocity.x = 1
    lua.velocity.x = -2
    terra.velocity.y = 1
    lua.velocity.y = -2
    // lua.setOrbitTo(terra)
}

function Update(delta) {
    terra.update()
    lua.update()
    if (terra.colidesTo(lua)) {
        console.log(terra.velocity.toArray())
        const tv = terra.velocity.copy()
        const lv = lua.velocity.copy()
        terra.velocity.x = 0
        lua.velocity.x = 0
        terra.velocity.y = 0
        lua.velocity.y = 0
        terra.applyForce(lv.scale(lua.mass/2))
        lua.applyForce(tv)//.scale(terra.mass/2))
    }
    console.log(lua.velocity.toArray())
}


engine.init()
