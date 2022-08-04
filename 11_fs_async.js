// fs module (Async)

const {readFile,writeFile}=require('fs')
console.log("start");
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(error)
        return null
    }
    else{
        const first = result;
        readFile('./content/second.txt','utf-8',(err,result)=>{
            if(err){
                console.log(error)
                return null
            }
            else{
                const second =result
                writeFile('./content/result_async.txt',`Here is the result: ${first},${second}`,{flag:'a'},(err,result)=>{
                    if(err){
                        return null
                    }
                    else{
                        console.log("done with this task");
                    }
                })
            }
        })
    }
})

console.log("starting next tasks");
