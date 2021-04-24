function Engine(config) {
  this.width = config.width ? config.width: 300
  
  this.height = config.height ? config.height : 300
  
  this.objects = {}
  
  const userUpdate = config.update ? config.update.bind(this) : ()=>{}
  
  const userSetup = config.setup ? config.setup.bind(this) : ()=>{}
  
  this.Vector = function(x,y) {
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
  
  this.init = () => {
    console.log('iniciando setup')
    userSetup()
    console.log('setup pronto')
    console.log('iniciando loop')
    initLoop()
    console.log('loop terminado')
  }
  

  function initLoop() {
    let lastUpdate;
    
    const loop = () => {
      let t = new Date().getTime();
      let delta = t - lastUpdate;
      
      userUpdate(delta);
      render();
      
      lastUpdate = new Date().getTime();
      window.requestAnimationFrame(loop);
    }
    
    lastUpdate = Date().getTime()
    window.requestAnimationFrame(loop);
  }
  
  function render() {
    for (const obj of this.objects) {
      if (obj.render) {
        obj.render()
      }
    }
  }
}