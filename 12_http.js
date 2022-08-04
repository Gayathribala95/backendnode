const http = require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/') {
        res.end("Welcome to our home page")
    }
    if(req.url==='/about'){
        res.end('This is our story')
    }
    res.end(`
    <h1>Oops Sorry<h1>
    <h2>The page you are looking is not fount</h2>
    <a href="/">Home Page</a>
    `)
})

server.listen(5000)