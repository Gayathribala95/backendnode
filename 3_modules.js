// CommonJS, every file is module (By default)
// Modules - Encapsulated Code (Only share minimum)

const names = require('./4_names')
const sayHi = require('./5_utils')
const data = require('./6_alternative_flavour')
require('./7_mind_grenade')
console.log(data)
sayHi("shastikha")
sayHi(names.gayathri)
sayHi(names.bala)

// const {gayathri,bala}=require('./4_names')
// sayHi(gayathri)
// sayHi(bala)

