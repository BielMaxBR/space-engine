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
  let v2 = new Vector(2,2)
  v1.div(v2)
  console.log(v1.toArray().x)
}


function Update(delta) {
  
}

engine.init()