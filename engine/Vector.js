export default function Vector(x,y) {
    this.x = x ? x : 0
    this.y = y ? y : 0
    
    this.add = (v) => {
      this.x += v.x
      this.y += v.y 
      return this
    }
    
    this.sub = (v) => {
      this.x -= v.x
      this.y -= v.y
      return this
    }
    
    
    this.scale = (n) => {
      this.x *= n
      this.y *= n
      return this
    }
    
    this.div = (n) => {
      this.x /= n
      this.y /= n
      return this
    }
    
    this.length = () => {
      return Math.sqrt(
          this.x ** 2 + this.y ** 2
        )
    }
    
    this.normalized = () => {
      const len = this.length()
      if (len > 0) {
        this.scale(1 / len)
      }
      return this
    }
    
    this.limit = (s) => {
      const len = this.length()
      
      if (len > s && len > 0) {
        this.scale(s / len)
      }
      
      return this
    }
    
    this.lerp = (v, t) => {
      this.x = this.x + (v.x - this.x) * t
      this.y = this.y + (v.y - this.y) * t
      return this
    }
    
    this.toObject = () => {
      return {
        x: this.x,
        y: this.y
      }
    }
    
    this.toArray = () => {
      return [this.x, this.y]
    }
  }
  