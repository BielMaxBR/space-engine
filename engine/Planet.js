import Entity from './Entity.js'
// classe para um planeta
export default class Planet extends Entity {
    constructor(config) {
        super(config.position, config.velocity, config.aceleration)
        
        this.mass = config.mass ? config.mass : 10

        this.tam = config.tam ? config.tam : 5

        this.color = config.color ? config.color : '#ffffff'
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        
        ctx.beginPath()
        ctx.ellipse(this.position.x,this.position.y,this.tam,this.tam, Math.PI / 4, 0, 2 * Math.PI)
        ctx.fill()
    }

    update() {
        this.velocity.add(this.aceleration)
        this.position.add(this.velocity)
    }
}