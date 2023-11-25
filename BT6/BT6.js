let a = 0;
let sum = 0;
let len = 30; // length

for( let i = 0; i < len; i++){
    a += 7;
    document.write(+ a + "<br>");
    sum += a;
}
document.write(`tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên là ${sum}` + "<br>" );