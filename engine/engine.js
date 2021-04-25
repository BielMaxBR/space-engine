import VectorClass from './Vector.js'
import EntityClass from './Entity.js'


export default class Engine {
  constructor(config) {
    
  this.width = config.width ? config.width: 300
  
  this.height = config.height ? config.height : 300
  
  this.canvas = config.canvas ? config.canvas : null
  
  this.ctx;
  
  this.Entity = EntityClass
  
  this.Vector = VectorClass
  
  
  this.userUpdate = config.update ? config.update.bind(this) : ()=>{}
  
  this.userSetup = config.setup ? config.setup.bind(this) : ()=>{}
  
  this.userRender = config.render ? config.render.bind(this) : ()=>{}

  }
  
  init() {

    console.log('iniciando setup')
    this.createCanvas()
    this.userSetup()
    console.log('setup pronto')
    console.log('iniciando loop')
    this.initLoop()
  }
  
  clearCanvas() {
    this.ctx.clearRect(0,0,this.width,this.height)
  }
  
  createCanvas() {
    let canvas = this.canvas
    if (canvas == null) {
      console.log('criando canvas')
      canvas = document.createElement('canvas')
      this.canvas = canvas
    }
      canvas.width = this.width
      canvas.height = this.height
      canvas.id = 'defaultCanvas0'
      this.ctx = canvas.getContext("2d")
      
      document.body.appendChild(canvas)
    
  }
  
  initLoop() {
    console.log('loop rodando')
    let lastUpdate = 0
    
    const loop = () => {
      let t = performance.now()
      let delta = t - lastUpdate;
      
      this.userUpdate(delta);
      this.userRender();
      
      lastUpdate = performance.now()
      window.requestAnimationFrame(loop);
    }
    
    lastUpdate = performance.now()
    window.requestAnimationFrame(loop);
  }
  
}
  
