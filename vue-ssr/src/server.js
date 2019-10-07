require('@babel/register');
const express = require('express');
const fs = require('fs');
const path = require('path');
const VueServerRenderer = require('vue-server-renderer');
const app = express();


const context = {
    content: '我是服务器端插值'
};
const serverBoundle = fs.readFileSync(path.resolve(__dirname,'../dist/server.boudle.js'),'utf8');
const template =  fs.readFileSync(path.resolve(__dirname,'../dist/index.ssr.html'),'utf8');
console.log(template);
const render = VueServerRenderer.createBundleRenderer(serverBoundle, {
    runInNewContext: false,
    template // （可选）页面模板
});
app.use('/static',express.static(path.resolve(__dirname,'../dist'),{
    extensions: ['htm', 'html'],
    redirect: false,
}));
app.get('/index',(req,res,next)=>{
    render.renderToString((err,temp)=>{
        console.log('@@@@@@@@@@@');
        console.log(temp);
        if(err){
            console.log(err);
        }
        res.send(temp);
    });
    next();
});



app.listen(3002,()=>{
    console.log('3002 启动成功！');
});