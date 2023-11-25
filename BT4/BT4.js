let a = 0;
let b = 1;
let numberFibo;

do{
    numberFibo = a + b;
    a = b;
    b = numberFibo;
} while (numberFibo % 5 != 0)

console.log(`số đầu tiên trong dãy fibonacci chia hết cho 5 là: ${numberFibo}`);