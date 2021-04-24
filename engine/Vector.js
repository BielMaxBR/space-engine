export default function Vector(x,y) {
    this.x = x ? x : 0
    this.y = y ? y : 0
    
    this.add = (Vector) => {
      this.x += Vector.x
      this.y += Vector.y 
    }
    
    this.sub = (Vector) => {
      this.x -= Vector.x
      this.y -= Vector.y
    }
    
    
    this.mult = (number) => {
      this.x *= number
      this.y *= number
    }
    
    this.div = (number) => {
      this.x /= number
      this.y /= number
    }
    
    this.mag = () => {
      return Math.sqrt(
          this.x ** 2 + this.y ** 2
        )
    }
    
    this.normalized = () => {
      const mag = this.mag()
      if (mag > 0) {
        this.div(mag)
      }
    }
    
    this.toArray = () => {
      return {
        x: this.x,
        y: this.y
      }
    }
  }
  