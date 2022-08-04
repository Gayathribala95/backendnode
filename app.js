//  npm - global commend,comes with node
//  npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it only in this particular project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file  (stores important info about project/package)
// mannuel approach (creake package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _=require('lodash')

const items=[1,[2,[3,[4]]]]

const newitems=_.flatMapDeep(items)

console.log(newitems);