export default class Vector {
  constructor(x,y) {
    this.x = x ? x : 0
    this.y = y ? y : 0
  }

  add(v) {
    this.x += v.x
    this.y += v.y 
  }
  
  sub(v) {
    this.x -= v.x
    this.y -= v.y
  }
      
  scale(n) {
    this.x *= n
    this.y *= n
  }
      
  div(n) {
    this.x /= n
    this.y /= n
  }
      
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
      
  normalized() {
    let len = this.length()
    if (len > 0) {
      this.scale(1 / len)
    }
  }
      
  limit(s) {
    let len = this.length()
        
    if (len > s && len > 0) { 
      this.scale(s / len)
    }
  }
      
  lerp(v, t) {
    this.x = this.x + (v.x - this.x) * t
    this.y = this.y + (v.y - this.y) * t
  }
    
  toObject() {
    return {
      x: this.x,
      y: this.y
    }
  }
      
  toArray() {
    return [this.x, this.y]
  }
  
  test() {
    return 3;
  }
  
}