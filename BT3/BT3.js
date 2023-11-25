// let a = 0;
// let b = 1;
// let c;

// for(let i = 0; i <= 20; i++){
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
// }

let a = 0, b = 1;
let countFibo = 20;
let temp;

console.log("20 số Fibonacci đầu tiên là: ");

for(let i = 0; i < countFibo; i++){
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
} 