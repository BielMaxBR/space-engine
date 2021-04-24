import Engine from './engine/engine.js'

const engine = new Engine({
  width: 300,
  height: 300,
  update: Update,
  setup: Setup,
})

const Vector = engine.Vector

function Setup() {
  let v1 = new Vector(3,3)
  let n1= 2
  v1.div(n1)
  console.log(v1.toArray())
}


function Update(delta) {
  
}

engine.init()