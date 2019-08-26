const client = require('http');
let port = 8080;

const newCli = client.createServer(() => {
   
});
newCli.on('error',err=>{
    if(err.code === 'EADDRINUSE'){
        newCli.listen(++port);
    }
});
const req = client.request({
    headers: 'localhost',
    port: 3000,
    method: 'POST'
},(res)=>{
    const arr = [];
    res.on('data',data=>{
        console.log(data);
        arr.push(data);
    });
    res.on('end',()=>{
        console.log(Buffer.concat(arr).toString());
    });
});
req.setHeader('Content-Type','text/');
req.write('{"a":123}');
req.end();

newCli.listen(port,()=>{
    console.log(port,'客户端启动成功');
});