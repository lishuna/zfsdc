// 重写new方法
function createClass(originObj,...args){
    const obj = {};
    // obj.__proto__ = originObj.prototype;
    Object.setPrototypeOf(obj,originObj.prototype)
    originObj.call(obj,...args);
    return obj;
}

function AAA(x,y){
    this.x =  x || 10;
    this.y = y || 20;
    this.getY = function(){
        return ++this.y;
    }
}
AAA.prototype.getX = function(){
    return this.x;
}

const aaa = createClass(AAA);

console.log(aaa.getY());
console.log(aaa.getX());

const bbb = createClass(AAA,200,300);
console.log(bbb.getY());
console.log(bbb.getX());