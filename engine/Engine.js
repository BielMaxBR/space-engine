import VectorClass from './Vector.js'
import EntityClass from './Entity.js'
import PerlinClass from './Perlin.js'

export default class Engine {
  constructor(config) {
    
  this.width = config.width ? config.width: 300
  
  this.height = config.height ? config.height : 300
  
  this.canvas = config.canvas ? config.canvas : null
  
  this.ctx = null

  this.objects = []
  
  this.Entity = EntityClass
  
  this.Vector = VectorClass
  
  this.Perlin = PerlinClass
  
  this.debug = false
  
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
  
  clearCanvas() {
    this.ctx.clearRect(0,0,this.width,this.height)
  }
  
  append(obj) {
    this.objects.push(obj)
  }
  
  renderList() {
    for (const obj of this.objects) {
      if(obj.draw) {
        obj.draw(this.ctx, this.debug)
      }
    }
  }
  
  printFPS(delta) {
    this.ctx.fillStyle = "white"
    this.ctx.fillText(
      Math.floor(1/(delta/1000)), 10, 10)
  }
  
  render(delta) {
    this.clearCanvas()
    this.printFPS(delta)
    this.renderList()
    this.userRender()
  }
  
  initLoop() {
    console.log('loop rodando')
    let lastUpdate = 0
    
    const loop = () => {
      let delta = performance.now() - lastUpdate
      
      this.userUpdate(delta)
      this.render(delta)
      
      lastUpdate = performance.now()
      //console.log(Math.floor(delta))
      //setTimeout(loop, 0)
      window.requestAnimationFrame(loop)
    }
    
    lastUpdate = performance.now()
    window.requestAnimationFrame(loop)
  }
  
}
  
