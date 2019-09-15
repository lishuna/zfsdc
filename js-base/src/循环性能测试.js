// let num = 100000;
// in 1.718 seconds
// for(let i=0;i<num;i++){
//     console.log(i);
// }
// 2.526 seconds 1.554
// while(num--){
//     console.log(num);
// }

let array = new Array(100000000);
array.fill(0,0,100000000);
let i=array.length,sum=0;
// 94.888 seconds
// for(let item in array){
//     sum+=item*1;
// }
// 6.472 seconds 6.494 seconds 6.68 seconds
// while(i--){
//     sum+=i;
// }

// 8.056 seconds 6.481 seconds 7.404 seconds
// for(let item =0 ; item< i;item++){
//         sum+=item*1;
//     }

// 9.654 seconds 9.736 seconds 10.152 seconds
// array.forEach((item,index)=>{
//     sum+=index;
// })

// 8.021 seconds 8.278 seconds
for(let key of array){
    sum+=key;
}
console.log(sum);