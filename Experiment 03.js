const http =require('http');
const port=3001;
const server = http.createServer((req,res)=>{
    console.log(`Request received: ${req.method} ${req.url }`);
// set status code for headers
res.statuscode=200;
res.setHeader('content type','text/plan');
res.setHeader('X-powered by','node.js');
// send response body
res.end('Hello world')
});
server.listen(port,()=>{
    console.log(`server running at http://localhost:$(port)`)
});
