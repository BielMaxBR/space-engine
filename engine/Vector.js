export default function(x,y) {
    this.x = x ? x : 0
    this.y = y ? y : 0
    
    this.add = function(Vector) {
      this.x += Vector.x
      this.y += Vector.y 
    }
    
    this.sub = function(Vector) {
      this.x -= Vector.x
      this.y -= Vector.y
    }
    
    
    this.mult = function(Vector) {
      this.x *= Vector.x
      this.y *= Vector.y
    }
    
    this.div = function(Vector) {
      this.x /= Vector.x
      this.y /= Vector.y
    }
    
    this.toArray = function() {
      return {
        x: this.x,
        y: this.y
      }
    }
  }
  