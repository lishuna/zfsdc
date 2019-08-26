const Http = require('http');
const URL = require('url');
const server = new Http.createServer();
let port = 3000;

server.on('request',(req,res)=>{
    // const method = req.method; // 请求方法
    // const url = req.url;    //请求路径
    const {method,url,httpVersion,headers} = {...req};
    // url.parse传入true 会将query转成对象
    const {pathname,query} = URL.parse(url,true);
    // console.log(method,url,httpVersion,pathname,query,headers);
    const reqData = [];
    req.on('data',data=>{
        // console.log(data);
        reqData.push(data);
    });
   
    req.on('end',()=>{
        const param = Buffer.concat(reqData).toString();
        console.log(param);
        let result = JSON.parse(param).a;
        console.log(result);
        res.end(result+'');
    });
    // res.setHeader('token',header.token);
    // res.setHeader('Content-Type','text/html;charset=utf-8');
    // res.setHeader('Access-Control-Allow-Headers','http://localhost:8080');
    // res.statusCode = 200;
    // res.write('hello world劳斯莱斯');
    // res.end();
});
// 
server.on('error',err=>{
    // 处理端口被占用的情况，将port++再重新监听
    if(err.code==='EADDRINUSE'){
        server.listen(++port);
    }
    console.log(port);
});
server.listen(port,()=>{
    console.log(port+'启动成功!');
});