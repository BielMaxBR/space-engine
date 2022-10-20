import Vector from "./Vector.js"

export default class Entity {
    constructor(position, velocity, aceleration) {

        this.position = position ? position : new Vector(0, 0)

        this.velocity = velocity ? velocity : new Vector(0, 0)

        this.aceleration = aceleration ? aceleration : new Vector(0, 0)
    }

    draw(ctx) { }

    update(delta) { }

}