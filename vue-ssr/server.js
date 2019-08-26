const express = require('express');
const app = express();

import Vue from './src/app';

app.get('*',(req,res,next)=>{
    const vm = Vue();
});
app.listen(3000);