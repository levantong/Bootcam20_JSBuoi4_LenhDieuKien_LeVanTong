//Lập công thức NumberFormat để số tiền hiển thị đẹp hơn

const NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})
    /**BÀI 1 - SẮP XẾP SỐ*/

function DoSort() {
    //lấy giá trị 3 số nhập vào, ép về kiểu số
    var num1 = Number(document.getElementById("num1").value) ; 
    var num2 = Number(document.getElementById("num2").value); 
    var num3 = Number(document.getElementById("num3").value); 
    //Khai báo biến tạm để gán thứ tự các số
    var no1 = 0; //số lớn nhất 
    var no2 = 0; //số lớn nhì 
    var no3 = 0; //nhỏ nhất 
    if(num1==num2 || num2==num3 ||num1==num3){ //Kiểm tra điều kiện 3 số khác nhau
        alert("Vui lòng nhập vào 3 số khác nhau!")  // thông báo lỗi
    } else
    if(num1>num2 && num2>num3){
        var no1 = num1; //số lớn nhất 
        var no2 = num2; //số lớn nhì 
        var no3 = num3; //nhỏ nhất 
    } else
    if(num1>num3 && num3>num2){
        var no1 = num1; //số lớn nhất 
        var no2 = num3; //số lớn nhì 
        var no3 = num2; //nhỏ nhất 
    } else
    if(num2>num1 && num1>num3){
        var no1 = num2; //số lớn nhất 
        var no2 = num1; //số lớn nhì 
        var no3 = num3; //nhỏ nhất 
    } else
    if(num2>num3 && num3>num1){
        var no1 = num2; //số lớn nhất 
        var no2 = num3; //số lớn nhì 
        var no3 = num1; //nhỏ nhất 
    } else
    if(num3>num1 && num1>num2){
        var no1 = num3; //số lớn nhất 
        var no2 = num1; //số lớn nhì 
        var no3 = num2; //nhỏ nhất 
    } else{
        var no1 = num3; //số lớn nhất 
        var no2 = num2; //số lớn nhì 
        var no3 = num1; //nhỏ nhất 
    }

    document.getElementById("result1").style.display = "block";  //hiện kết quả
    document.getElementById("result1").innerHTML = "Thứ tự tăng dần là: " + no3 +" < "+ no2  +" < "+ no1

} //ngoặc đóng function

document.getElementById("btnCalc1").onclick = DoSort; // gán lệnh DoSort vào nút

        /**BÀI 2 - Chương trình "Chào hỏi"*/

function DoGreeting() {
    var userKey = document.getElementById("user").value;  //lấy giá trị nhập vào
    var user = ""; //tạo biến để gán tên xưng hô vào
    if (userKey == 0){
        alert("Xin chọn 1 user!") //báo lỗi khi người dùng không chọn mà nhấn Đăng nhập
    } else{
    switch (userKey) {
        case "B":
            user = "Bố";
            break;
        case "M":
            user = "Mẹ"
            break;
        case "A":
            user = "Anh trai"
            break;
        case "E":
            user = "Em gái"
            break;
            
        }
    console.log(userKey)
    document.getElementById("result2").style.display = "block"; //hiện block chứa kết quả
    document.getElementById("result2").innerHTML = "Xin chào "+user+", chúc một ngày tốt lành!" //xuất ra màn hình
    }
} //ngoặc đóng function
 
document.getElementById("btnCalc2").onclick = DoGreeting; // gán lệnh DoGreeting vào nút

    /**BÀI 3 - ĐẾM SỐ CHẴN, LẺ */

function DoCount() {
    //lấy giá trị 3 số nhập vào, ép về kiểu số
    var num1 = Number(document.getElementById("B3_num1").value);
    var num2 = Number(document.getElementById("B3_num2").value);
    var num3 = Number(document.getElementById("B3_num3").value);

    var countEven = 0; //Khai báo biến đếm số chẵn
    //Xét 3 số nhập vào xem có phải là số chẵn không
    if(num1 % 2 == 0){
        countEven++
    }
    if(num2 % 2 == 0){
        countEven++
    }
    if(num3 % 2 == 0){
        countEven++
    }
    var countOdd = 3-countEven; //tính số lẻ 

    document.getElementById("result3").style.display = "block"; //hiện kết quả
    document.getElementById("result3").innerHTML = "Có "+countEven+" số chẵn và "+countOdd+" số lẻ"
}
document.getElementById("btnCalc3").onclick = DoCount; // gán lệnh DoCount vào nút

    /**BÀI 4 - XÉT TAM GIÁC */

function typeOf_Triangle() {
    //khai báo biến lấy số đo 3 cạnh nhập vào, ép về kiểu số
    var edg1 = Number(document.getElementById("edge1").value);
    var edg2 = Number(document.getElementById("edge2").value);
    var edg3 = Number(document.getElementById("edge3").value);
    var type = ""; //khai báo biến kiểu tam giác
    var mark = ""; //khai báo biến mô tả dấu hiệu nhận diện
    if (edg1 != edg2 && edg1 != edg3 && edg3 != edg2 ){ //xét xem 3 cạnh có khác nhau không
        if(edg1*edg1 + edg2*edg2== edg3*edg3 || edg1*edg1 + edg3*edg3== edg2*edg2 || edg3*edg3 + edg2*edg2== edg1*edg1 ){ //xét tiếp nó phải tam giác vuông không
            type = "vuông"; //nếu đúng khác nhau là tam giác thường
        mark = "3 cạnh không bằng nhau và tổng bình phương 2 cạnh nhỏ bằng đúng bình phương cạnh lớn.";
        } else{
            type = "thường"; //nếu đúng khác nhau là tam giác thường
            mark = "3 cạnh không bằng nhau.";
        }


        //nếu sai chắc chắn là tam giác cân hoặc vuông, khoan kết luận xét tiếp xem nó phải tam giác vuông nay đều
    } else if(edg1 == edg2 && edg1 == edg3 && edg3 == edg2 ){ //xét xem phải tam giác đều không
        type = "đều"; //nếu đúng là tam giác đều
        mark = "3 cạnh bằng nhau.";

        //nếu sai xét tiếp nó là tam giác cân hay vuông cân
    } else if(edg1*edg1 + edg2*edg2== edg3*edg3 || edg1*edg1 + edg3*edg3== edg2*edg2 || edg3*edg3 + edg2*edg2== edg1*edg1 ){
        type = "vuông cân"; //nếu đúng là tam giác vuông cân
        mark = "2 cạnh bằng nhau và tổng bình phương 2 cạnh nhỏ bằng đúng bình phương cạnh lớn.";
    } else{
        type = "cân"; //còn lại thì là tam giác cân
        mark = "2 cạnh bằng nhau.";
    }

    document.getElementById("result4").style.display = "block"; //hiện kết quả
    document.getElementById("result4").innerHTML = "Tam giác này là tam giác "+type+" do có "+mark
}
document.getElementById("btnCalc4").onclick = typeOf_Triangle; // gán lệnh typeOf_Triangle vào nút


