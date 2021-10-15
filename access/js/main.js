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
        mark = "tổng bình phương 2 cạnh nhỏ bằng đúng bình phương cạnh lớn.";
        } else{
            type = "thường"; //nếu khác nhau là tam giác thường
            mark = "3 cạnh không bằng nhau.";
        }


        //nếu sai chắc chắn là tam giác cân hoặc vuông, khoan kết luận xét tiếp xem nó phải tam giác vuông nay đều
    } else if(edg1 == edg2 && edg1 == edg3 && edg3 == edg2 ){ //xét xem phải tam giác đều không
        type = "đều"; //nếu đúng là tam giác đều
        mark = "3 cạnh bằng nhau.";

    } else{
        type = "cân"; //còn lại thì là tam giác cân
        mark = "2 cạnh bằng nhau.";
    }

    document.getElementById("result4").style.display = "block"; //hiện kết quả
    document.getElementById("result4").innerHTML = "Tam giác này là tam giác "+type+" do có "+mark
}
document.getElementById("btnCalc4").onclick = typeOf_Triangle; // gán lệnh typeOf_Triangle vào nút


   /** BÀI 5 - TÍNH NGÀY THÁNG NĂM  */

   //khai báo biến lấy ngày nhập vào, trích xuất ngày, tháng, năm gán vào các biến tương ứng
function Find_earlierDay() { //hàm tìm ngày trước đó
    var dayInput = document.getElementById("dayInput").value; //lấy giá trị nhập vào - kiểu hiện tại là string định dạng: yyyy-mm-dd vd: 1990-02-20
    var dd = dayInput.slice(8, 10); //lấy ngày
    var mm = dayInput.slice(5, 7); //lấy tháng
    var yy = dayInput.slice(0, 4); //lấy năm
    var ed = ""; // viết tắt của earlier Day, ngày trước ngày nhập vào
    var em = ""; // viết tắt của earlier month, tháng trước ngày nhập vào
    var ey = ""; // viết tắt của earlier Day, năm trước ngày nhập vào

    if (dd == 01 && mm == 01) { //kiểm tra phải ngày đầu tiên của năm không?
        ed = 31;
        em = 12;
        ey = yy - 1;

    } else if(dd == 01){ //kiểm tra phải ngày đầu tiên của tháng không?
        if(mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12){ //tháng có 31 ngày, thì tháng trước nó có 30 ngày
            ed = 30;
            em = mm - 1;
            ey = yy;
        } else{
            ed = 31;
            em = mm - 1;
            ey = yy;
        }
    }
    else {
        ed = dd -1;
        em = mm;
        ey = yy;
    }
    document.getElementById("result5").style.display = "block"; //hiện kết quả
    document.getElementById("result5").innerHTML = "Ngày trước đó là: "+ed +"/" +em+"/"  + ey
}
   
document.getElementById("btnCalc5_1").onclick = Find_earlierDay; // gán lệnh typeOf_Triangle vào nút  'Tìm ngày trước đó'
   
function Find_nextDay() { //hàm tìm ngày sau đó
    var dayInput = document.getElementById("dayInput").value; //lấy giá trị nhập vào - kiểu hiện tại là string định dạng: yyyy-mm-dd vd: 1990-02-20
    var dd = Number(dayInput.slice(8, 10)); //lấy ngày, ép kiểu số
    var mm = Number(dayInput.slice(5, 7)); //lấy tháng, ép kiểu số
    var yy = Number(dayInput.slice(0, 4)); //lấy năm, ép kiểu số
    var nd = ""; // viết tắt của next Day, ngày của kết quả sau ngày nhập vào
    var nm = ""; // viết tắt của next month, tháng của kết quả sau ngày nhập vào
    var ny = ""; // viết tắt của next Day, năm của kết quả sau ngày nhập vào

    if (dd == 31 && mm == 12) { //kiểm tra phải ngày cuối của năm không?
        nd = 01;
        nm = 01;
        ny = yy + 1;

    } else if(  (dd == 31 &&(mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10)) || (dd == 30 &&(mm == 4 || mm == 6 || mm == 9 || mm == 11)) || (dd == 28 && mm == 2) ){ //kiểm tra phải là ngày cuối của các tháng không?
            nd = 01;
            nm = mm + 1;
            ny = yy;
        } else{
            nd = dd + 1;
            nm = mm;
            ny = yy;
        }
    document.getElementById("result5").style.display = "block"; //hiện kết quả
    document.getElementById("result5").innerHTML = "Ngày sau đó là: "+nd +"/" +nm+"/"  + ny
}
   
document.getElementById("btnCalc5_2").onclick = Find_nextDay; // gán lệnh typeOf_Triangle vào nút 'Tìm ngày sau đó'
   
   
    /** BÀI 6 - TÌM SỐ NGÀY CỦA THÁNG  */

/** Dấu hiệu nhận biết: số năm chia hết cho 4
 * năm nhuận tháng 2 có 29 ngày, còn lại các tháng khác như năm thường:
 *  Các tháng 30 ngày: 4, 6, 9, 11
 *  Các tháng 31 ngày: 1, 3, 5, 7, 8, 10, 12
*/
function Find_numberOfDays(){
    var MonthInput = document.getElementById("month").value; //lấy giá trị tháng nhập vào - kiểu hiện tại là string 
    var YearInput = document.getElementById("year").value; //lấy giá trị năm nhập vào - kiểu hiện tại là string 
    var numberOfDays = ""; //biến chứa kết quả
    if (YearInput % 4 == 0){//kiểm tra xem phải năm nhuận không
        switch(MonthInput){
            case "2":
                numberOfDays = 29;
                break;
            case "4":
            case "6":
            case "9":
            case "11":
                numberOfDays = 30;
                break;
            case "1":
            case "3":
            case "5":
            case "8":
            case "10":
            case "12":
                numberOfDays = 31;
                break;
        }
    } else{ //không nhuận thì tháng 2 có 28 ngày
        switch(MonthInput){
            case "2":
                numberOfDays = 28;
                break;
            case "4":
            case "6":
            case "9":
            case "11":
                numberOfDays = 30;
                break;
            case "1":
            case "3":
            case "5":
            case "8":
            case "10":
            case "12":
                numberOfDays = 31;
                break;
        }
    }
    console.log(MonthInput)
    console.log(YearInput)
    console.log(numberOfDays)


    document.getElementById("result6").style.display = "block"; //hiện kết quả
    document.getElementById("result6").innerHTML = "Tháng "+MonthInput+" năm "+YearInput+" có "+numberOfDays+" ngày."

}
   
document.getElementById("btnCalc6").onclick = Find_numberOfDays; // gán lệnh Find_numberOfDays vào nút 'Tìm số ngày của tháng'


