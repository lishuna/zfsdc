### 编译Vue项目

- webpack webpack-cli  webpack构建需要
- html-webpack-plugin 向html中插入js、css等文件
- clean-webpack-plugin 清除多余编译文件
- vue-loader vue编译相关
- vue-template-compiler 编译.vue文件
- vue-server-renderer 服务器端渲染
- vue-style-loader 处理Vue服务器端样式
- @babel/core @babel/preset-env babel-loader

### 服务器端渲染
1.通过`vue-server-renderer`对象创建渲染函数

```
const vueServerRenderer  = require('vue-server-renderer');
const html =  fs.readFileSync(path.join(__dirname,'index.html'),'utf8');
const render = vueServerRenderer.createRenderer({
    template: html
});
```
> 创建的时候可以传入服务器端html模板

2.通过渲染函数去渲染对应的Vue对象，生成最终的模板，吐给浏览器

```
const app = express();
const express = require('express');
const Vue  = require('vue');
const fs = require('fs');
const path = require('path');

const vm =new Vue({
    template: '<h1>hello word!你好</h1>'
});
app.get('/',(req,res,next)=>{
    render.renderToString(vm,(err,template)=>{
        if(err){
            console.log(err);
        }
        console.log(template);
        res.send(template);
    });
});
```
> 通过渲染对象调用`renderToString`,生成最终模板。

3.html页面对应增加服务器点模板占位：
```
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Vue构建练习</title>
</head>

<body>
  <div id="app"></div>
  <!--vue-ssr-outlet-->
</body>

</html>
```

4.服务器端在渲染插值表达式，使用`{{{}}}`，跟客户端区分开，客户端是`{{}}`

- 服务器端，通过render.renderToString第二个参数传入插值对应的对象
```
const context = {
    content: '我是服务器端插值'
};
app.get('/',(req,res,next)=>{
    render.renderToString(vm,context,(err,template)=>{
        if(err){
            console.log(err);
        }
        console.log(template);
        res.send(template);
    });
});
```
- html页面
```
<div>{{{content}}}</div>
```