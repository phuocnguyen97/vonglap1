let a = 0, b = 1;
let countFibo = 20;
let temp;
let total = 0;

console.log("tổng của 20 số đầu tiên trong dãy fibonacci là: ");

for(let i = 0; i < countFibo; i++){
    temp = a + b;
    a = b;
    b = temp;
    total += a;
}
console.log(total);
