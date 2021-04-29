import Entity from './Entity.js'
import Vector from './Vector.js'
// classe para um planeta
export default class Planet extends Entity {
    constructor(config) {
        super(config.position, config.velocity, config.aceleration)
        
        this.G = 1
        
        this.mass = config.mass ? config.mass : 1

        this.tam = config.tam ? config.tam : 5

        this.color = config.color ? config.color : 'rgb(' + (Math.floor((Math.random() * 255) + 1)).toString() + ' ,' + (Math.floor((Math.random() * 255) + 1)).toString() + ' ,' + (Math.floor((Math.random() * 255) + 1)).toString() + ' )'
    }
    
    constrain(number, min, max) {
      if (number < min) {
        return min
      }
      if (number > max) {
        return max
      }
      return number
    }

    applyForce(force) {
      var f = Vector.div(force,this.mass)
      
      this.aceleration.add(f)
    }

    calculateAttraction(planet) {
  
      var force = Vector.sub(this.position, planet.position)
      var distance = force.length()
      force.normalized()
      
      distance = this.constrain(distance, 10, 1000)
      
      var strength = (this.G * this.mass * planet.mass) / (distance ** 2)
      force.scale(strength)
    
      return force;
    }
    
    orbit(Planet) {
      let force = Planet.calculateAttraction(this)
      
      this.applyForce(force)
    }

    draw(ctx, debug) {
        ctx.fillStyle = this.color
        
        ctx.beginPath()
        
        ctx.ellipse(this.position.x,this.position.y,this.tam,this.tam, this.velocity.angleRad()+Math.PI/2, 0, 2 * Math.PI)

        ctx.fill()
        
        ctx.closePath()
        
        if (debug) {
          ctx.beginPath()
          
          ctx.lineWidth = 2
          ctx.lineCap = "square"
          ctx.strokeStyle = "lightgreen"
          
          ctx.moveTo(this.position.x, this.position.y)
          ctx.lineTo(
            this.position.x+(this.velocity.x*7),
            this.position.y+(this.velocity.y*7))
            
          ctx.stroke()
          
          ctx.closePath()
        }

    }

    update() {
      
        this.velocity.add(this.aceleration)
        this.position.add(this.velocity)
        this.aceleration.scale(0)
        
        this.velocity.limit(25)

    }
}