import Engine from './engine/engine.js'

const engine = new Engine({
  width: 300,
  height: 300,
  update: Update,
  setup: Setup,
})

const Vector = engine.Vector
const obj = new engine.Entity()

function Setup() {
  let v1 = new Vector(3,3)
  let n1 = 2
  v1.div(n1)
  console.log(v1.toArray())
}


function Update(delta) {
  this.ctx.clearRect(0,0,this.width,this.height)
  
  obj.velocity.x = 1
  
  obj.update()
  obj.draw(this.ctx)
  
  if(obj.position.x > this.width) {
    obj.position.x = -10
  }
}

engine.init()