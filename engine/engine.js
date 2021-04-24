import VectorClass from './Vector.js'
import EntityClass from './Entity.js'

export default function Engine(config) {
  this.width = config.width ? config.width: 300
  
  this.height = config.height ? config.height : 300
  
  this.canvas = config.canvas ? config.canvas : null
  
  this.ctx;
  
  this.objects = {}
  
  this.Entity = EntityClass

  const userUpdate = config.update ? config.update.bind(this) : ()=>{}
  
  const userSetup = config.setup ? config.setup.bind(this) : ()=>{}
  
  this.Vector = VectorClass
  
  this.init = () => {
    console.log('iniciando setup')
    createCanvas()
    userSetup()
    console.log('setup pronto')
    console.log('iniciando loop')
    initLoop()
  }
  
  const createCanvas = () => {
    let canvas = this.canvas
    if (canvas == null) {
      console.log('criando canvas')
      canvas = document.createElement('canvas')
      this.canvas = canvas
    }
      canvas.width = this.width
      canvas.height = this.height
      
      this.ctx = canvas.getContext("2d")
      
      document.body.appendChild(canvas)
    
  }
  
  const initLoop = () => {
    console.log('loop rodando')
    let lastUpdate
    
    const loop = () => {
      let t = performance.now()
      let delta = t - lastUpdate;
      
      userUpdate(delta);
      render();
      
      lastUpdate = performance.now()
      window.requestAnimationFrame(loop);
    }
    
    lastUpdate = performance.now()
    window.requestAnimationFrame(loop);
  }
  
  const render = () => {
    //console.log(this.objects)
    for (const obj of Object.values(this.objects)) {
      if (obj.render) {
        obj.render()
      }
    }
  }
}