
Function.prototype.callNew = function(obj,...args){
    obj = obj || window
    obj.fn = this;
    return obj.fn(...args);
}

function fun(){
    // this.x = 10;
    this.y = 20;
    this.getY = function(){
        return this.y;
    }
    console.log(this.y+this.x);
}
let x = 1;
let y = 2;
const obj1 = {
    show(){
        console.log(this.x+this.y);
    }
}
const obj = {
    y: 100,
    x: 200
}
obj1.show.callNew(obj);
