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
    mass: 10,
    color: "#aaaaaa"
})

function Setup() {

    terra.position = new Vector(200, 248)
    lua.position = new Vector(300, 254)


    this.append(terra)
    this.append(lua)

    terra.velocity.x = 2
    lua.velocity.x = -3
    // lua.setOrbitTo(terra)
}

function Update(delta) {
    for (let i = 0; i < this.objects.length; i++) {
        const obj1 = this.objects[i]
        obj1.update()
        for(let j = i + 1; j < this.objects.length; j++) {
            const obj2 = this.objects[j]

            if (obj1.colidesTo(obj2)) {
                this.calculateBounce(obj1, obj2)
            }
        }
    }
}


engine.init()
