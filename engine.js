class Engine {
  constructor(config) {
    this.teste = "ola mundo!"
    this.width = config.width ? config.width : 300
    
    this.height = config.height ? config.height : 300
    
    this.userUpdate = config.update ? config.update : ()=>{}
    
    this.userSetup = config.update ? config.update : ()=>{}
  }
}