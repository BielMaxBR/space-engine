import VectorClass from './Vector.js'

export default function Engine(config) {
  this.width = config.width ? config.width: 300
  
  this.height = config.height ? config.height : 300
  
  this.objects = []
  
  const userUpdate = config.update ? config.update.bind(this) : ()=>{}
  
  const userSetup = config.setup ? config.setup.bind(this) : ()=>{}
  
  this.Vector = VectorClass
  this.init = () => {
    console.log('iniciando setup')
    userSetup()
    console.log('setup pronto')
    console.log('iniciando loop')
    initLoop()
    console.log('loop terminado')
  }
  

  const initLoop = () => {
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
    console.log(this.objects.length)
    for (const obj of this.objects) {
      if (obj.render) {
        obj.render()
      }
    }
  }
}