let a = parseFloat(prompt("Nhập vào nhiệt độ: "));
while(a < 20 || a > 100){
    
    if(a < 20){

        alert("Nhiệt độ quá lạnh");
        a = parseFloat(prompt("Nhập vào nhiệt độ: "));

    } else if(a > 100){

        alert("Nhiệt độ quá nóng");
        a = parseFloat(prompt("Nhập vào nhiệt độ: "));

    } else{

        alert("Nhiệt độ bình thường");

    }
       
}