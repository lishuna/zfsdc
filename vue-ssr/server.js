require('@babel/register');
const express = require('express');
const Vue  = require('vue');
const fs = require('fs');
const path = require('path');
const vueServerRenderer  = require('vue-server-renderer');
const createApp = require('./src/server.entry');
const app = express();


const context = {
    content: '我是服务器端插值'
};
const html =  fs.readFileSync(path.join(__dirname,'index.html'),'utf8');
const render = vueServerRenderer.createRenderer({
    template: html
})
app.get('*',(req,res,next)=>{
    const vm = createApp({
        url: req.path
    });
    render.renderToString(vm,context,(err,template)=>{
        if(err){
            console.log(err);
        }
        console.log(template);
        res.send(template);
    });
});


app.listen(3002,()=>{
    console.log('3002 启动成功！');
});