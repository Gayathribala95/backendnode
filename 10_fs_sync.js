// fs module (sync)

const {readFileSync,writeFileSync}=require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first)
// console.log(second)


writeFileSync('./content/result_sync.txt',`Here is the result ${first},${second},`,{flag:'a'})
console.log("done with this task");
console.log("starting next tasks");
// or
// const fs=require('fs')
// console.log(fs.readFileSync)