
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

    console.log(num1)
    console.log(num2)
    console.log(num3)
    console.log(document.getElementById("num1").value.length)
    console.log(document.getElementById("num2").value.length)
    console.log(document.getElementById("num3").value.length)

    // xét xem người dùng có nhập đủ 3 số không?
    if (document.getElementById("num1").value.length == 0 || document.getElementById("num2").value.length == 0 ||document.getElementById("num3").value.length ==0){
        document.getElementById("result1").style.display = "block"; 
        document.getElementById("result1").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result1").innerHTML = "Vui lòng nhập vào đủ 3 số!" //Nhắc user nhập cho đủ

        
    } else //Nếu nhập đủ Kiểm tra tiếp điều kiện 3 số khác nhau
    if(num1==num2 || num2==num3 ||num1==num3){ //3 số giống nhau thì báo lỗi
        document.getElementById("result1").style.display = "block"; 
        document.getElementById("result1").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result1").innerHTML = "Vui lòng nhập vào 3 số khác nhau!" //Nhắc user nhập 3 số khác nhau
    } else { //thỏa 3 số khác nhau bắt đầu xét 
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
        document.getElementById("result1").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result1").innerHTML = "Thứ tự tăng dần là: " + no3 +" < "+ no2  +" < "+ no1
    }
} //ngoặc đóng function

document.getElementById("btnCalc1").onclick = DoSort; // gán lệnh DoSort vào nút

        /**BÀI 2 - Chương trình "Chào hỏi"*/

function DoGreeting() {
    var userKey = document.getElementById("user").value;  //lấy giá trị nhập vào
    var user = ""; //tạo biến để gán tên xưng hô vào

    //ktra xem người dùng có chọn chưa:
    if (userKey == 0){
        document.getElementById("result2").style.display = "block"; 
        document.getElementById("result2").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result2").innerHTML = "Vui lòng chọn 1 user bên trên!" //Nhắc user chọn lại cho đúng    
    } else{ //chọn rồi thì xét userKey để gán tên gọi cho user
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
    document.getElementById("result2").style.display = "block"; //hiện block chứa kết quả
    document.getElementById("result2").className = "alert alert-success mt-3"; //đổi màu thông báo sang kiểu success nếu lờ người dùng nhập sai trước đó
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
    // xét xem người dùng có nhập đủ 3 số không?
    if (document.getElementById("B3_num1").value.length == 0 || document.getElementById("B3_num2").value.length == 0 ||document.getElementById("B3_num3").value.length ==0){
        document.getElementById("result3").style.display = "block"; 
        document.getElementById("result3").className = "alert alert-warning mt-3"; //đổi lại màu phần tử thông báo nếu người dùng lỡ nhập sai trước đó
        document.getElementById("result3").innerHTML = "Vui lòng nhập vào đủ 3 số!" //Không đủ nhắc user nhập cho đủ

    } else{
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
        document.getElementById("result3").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result3").innerHTML = "Có "+countEven+" số chẵn và "+countOdd+" số lẻ"
    }
    
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

    // xét xem người dùng có nhập đủ 3 cạnh không?
    if (document.getElementById("edge1").value.length == 0 || document.getElementById("edge2").value.length == 0 ||document.getElementById("edge3").value.length ==0){
        document.getElementById("result4").style.display = "block"; 
        document.getElementById("result4").className = "alert alert-warning mt-3"; 
        document.getElementById("result4").innerHTML = "Vui lòng nhập vào đủ 3 cạnh!" //Không đủ nhắc user nhập cho đủ

    } else{
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
        document.getElementById("result4").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result4").innerHTML = "Tam giác này là tam giác "+type+" do có "+mark
    }
    
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

    //ktra xem user có chọn ngày chưa:
    if (dayInput == 0){
        document.getElementById("result5").style.display = "block"; 
        document.getElementById("result5").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result5").innerHTML = "Vui lòng chọn 1 ngày!" //Nhắc user chọn lại cho đúng    
    } else{
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
        document.getElementById("result5").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result5").innerHTML = "Ngày trước đó là: "+ed +"/" +em+"/"  + ey
    }

    
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

    //ktra xem user có chọn ngày chưa:
    if (dayInput == 0){
        document.getElementById("result5").style.display = "block"; 
        document.getElementById("result5").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result5").innerHTML = "Vui lòng chọn 1 ngày!" //Nhắc user chọn lại cho đúng    
    } else{
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
        document.getElementById("result5").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result5").innerHTML = "Ngày sau đó là: "+nd +"/" +nm+"/"  + ny
    }
    
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

    //ktra xem user có nhập ngày với năm chưa:
    if (document.getElementById("month").value.length == 0 ||document.getElementById("year").value.length == 0){
        document.getElementById("result6").style.display = "block"; 
        document.getElementById("result6").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result6").innerHTML = "Vui lòng nhập cả tháng và năm!" //Nhắc user chọn lại cho đúng    
    } else{
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
                default:
                    
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
    
    
        document.getElementById("result6").style.display = "block"; //hiện kết quả
        document.getElementById("result6").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result6").innerHTML = "Tháng "+MonthInput+" năm "+YearInput+" có "+numberOfDays+" ngày."

    }
    
}
   
document.getElementById("btnCalc6").onclick = Find_numberOfDays; // gán lệnh Find_numberOfDays vào nút 'Tìm số ngày của tháng'



    /** BÀI 7 - ĐỌC SỐ */


function convert_toLetters(a){ //lập hàm đổi ký tự sang chữ
    var text = "";
    switch(a){
        case "1":
            text = "một"
            break;
        case "2":
            text = "hai"
            break;
        case "3":
            text = "ba"
            break;
        case "4":
            text = "bốn"
            break;
        case "5":
            text = "năm"
            break;
        case "6":
            text = "sáu"
            break;
        case "7":
            text = "bảy"
            break;
        case "8":
            text = "tám"
            break;
        case "9":
            text = "chín"
            break;
        case "0":
            text = "không"
            break;
    }
    return text;
}

function Find_numberIn_Words(){
    var numInput = document.getElementById("NumberLesson7").value; //lấy giá trị số nhập vào - kiểu chuỗi

    //dùng hàm đổi ký tự sang chữ 'convert_toLetters' đã khai ở trên chuyển các đối số của số nhập vào thành chữ
    var hundreds_digit = convert_toLetters(numInput.substr(0,1))  //đọc hàng trăm
    var ten_digit = convert_toLetters(numInput.substr(1,1)) //đọc hàng chục
    var unit_digit = convert_toLetters(numInput.substr(2,1)) //đọc hàng đơn vị

    
    //ktra xem user có đúng số có 3 chữ số chưa:
    if (document.getElementById("NumberLesson7").value.length != 3){
        document.getElementById("result7").style.display = "block"; 
        document.getElementById("result7").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result7").innerHTML = "Vui lòng nhập vào số có 3 chữ số!" //Nhắc user chọn lại cho đúng    
    } else{
        var cachdoc = "";
    if (ten_digit == "một"){ //Xem hàng chục nó phải số 1 không vì số 1 hàng chục sẽ đọc là mười, không dùng từ 'mươi'
        ten_digit = "mười"; // nếu đúng đổi 'một' thành 'mười'

        if (hundreds_digit == "không" && unit_digit != "không") {  //xử lý khi nhập số 0 hàng trăm: 01*
            cachdoc = "Số "+ numInput+ " đọc là : '" + ten_digit + " " + unit_digit + "'."
        } else 
        if(hundreds_digit != "không" && unit_digit == "không"){  //xử lý khi nhập số 0 hàng đơn vị: *10
            cachdoc = "Số "+ numInput + " đọc là : '"+ hundreds_digit + " trăm " + ten_digit+ "'."
        } else
        if(hundreds_digit == "không" && unit_digit == "không"){  //xử lý khi nhập số dạng 010
            cachdoc = "Số "+ numInput+ " đọc là : '" + ten_digit + "'."
        }else { //Không có số 0 đọc bình thường
            cachdoc = "Số "+ numInput+ " đọc là : '" + hundreds_digit + " trăm " + ten_digit + " "+ unit_digit + "'."
        }
    } else{  //Nếu ko phải dạng *1* thì xét tiếp cách đọc khi các chữ số bằng không

        if (hundreds_digit == "không" && ten_digit != "không" && unit_digit != "không") {  //xử lý khi nhập số 0 hàng trăm
            cachdoc = "Số "+ numInput+ " đọc là : '"+ten_digit+" mươi "+unit_digit+"'."
        } else 
        if(hundreds_digit != "không" && ten_digit == "không" && unit_digit != "không"){  //xử lý khi nhập số 0 hàng chục
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm lẻ "+unit_digit+"'."
        } else 
        if(hundreds_digit != "không" && ten_digit != "không" && unit_digit == "không"){  //xử lý khi nhập số 0 hàng đơn vị
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+ten_digit+" mươi'."
        } else
        if(hundreds_digit == "không" && ten_digit == "không" && unit_digit != "không"){  //xử lý khi nhập số dạng 00*
            cachdoc = "Số "+ numInput+ " đọc là : '"+unit_digit+"'."
        } else
        if(hundreds_digit != "không" && ten_digit == "không" && unit_digit == "không"){  //xử lý khi nhập số dạng *00
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+"'."
        } else
        if(hundreds_digit == "không" && ten_digit != "không" && unit_digit == "không"){  //xử lý khi nhập số dạng 0*0
            cachdoc = "Số "+ numInput+ " đọc là : '"+ten_digit+" mươi'."
        }else { //Không có số 0 đọc bình thường
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+ten_digit+" mươi "+ unit_digit+"'."
        }
    }
    document.getElementById("result7").innerHTML = cachdoc;  //gán cách đọc vào chỗ hiển thị kết quả
    document.getElementById("result7").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
    document.getElementById("result7").style.display = "block"; //hiện kết quả
    }
    
}
document.getElementById("btnCalc7").onclick = Find_numberIn_Words; // gán lệnh Find_numberIn_Words vào nút 'In cách đọc'

            /**BÀI 8 - TÌM NGƯỜI XA TRƯỜNG NHẤT */

/** Phương án: tính khoảng cách từ nhà đến trường (về sau gọi tắt là khoảng cách) của 3 sinh viên
 * sau đó xét xem khoảng cách nào lớn nhất (Ứng dụng lại hàm đã khai báo ở bài tập số 1 - sắp xếp số)
 * => xuất tên sinh viên tương ứng
 * 
 * Trong đó: khoảng cách là cạnh huyền của 1 tam giác vuông, có 2 cạnh lần lượt là hiệu số giữa kinh độ của trường - kinh độ nhà sv, vĩ độ của trường - vĩ độ nhà sv.
 * 
 * Quy đổi ra km: Chiều dài của một độ cung tại vùng gần xích đạo ~110,574 km theo wiki :https://vi.wikipedia.org/wiki/V%C4%A9_%C4%91%E1%BB%99
 * 
 * lập biến const phi_ToKm = 110.574
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

function CalcDistance(a,b,c,d) {
    const phi_ToKm = 110.574
    var distance = (phi_ToKm * Math.sqrt((c-a)*(c-a)+(d-b)*(d-b))).toFixed(2);
    return Number(distance);
}
function Find_Furthest(){ //hàm tìm người xa nhất
    //lấy giá trị nhập vào 

    //tọa độ trường
    var vi_doTruong = Number(document.getElementById("vi_doTruong").value); 
    var kinh_doTruong = Number(document.getElementById("kinh_doTruong").value); 

    //sinh viên 1
    var name1 = document.getElementById("name1").value; 
    var vi_do1 = Number(document.getElementById("vi_do1").value); 
    var kinh_do1 = Number(document.getElementById("kinh_do1").value); 
    //sinh viên 2
    var name2 = document.getElementById("name2").value; 
    var vi_do2 = document.getElementById("vi_do2").value; 
    var kinh_do2 = document.getElementById("kinh_do2").value; 
    //sinh viên 3
    var name3 = document.getElementById("name3").value; 
    var vi_do3 = document.getElementById("vi_do3").value; 
    var kinh_do3 = document.getElementById("kinh_do3").value; 

    var distance1 = CalcDistance(vi_do1,kinh_do1,vi_doTruong,kinh_doTruong)
    var distance2 = CalcDistance(vi_do2,kinh_do2,vi_doTruong,kinh_doTruong)
    var distance3 = CalcDistance(vi_do3,kinh_do3,vi_doTruong,kinh_doTruong)

    if (distance1 > distance2 && distance1>distance3){
        var TenSv_xaNhat = name1
    } else if(distance2 > distance1 && distance2>distance3){
        var TenSv_xaNhat = name2
    } else {
        var TenSv_xaNhat = name3
    }

    //gán cách đọc vào chỗ hiển thị kết quả:
    document.getElementById("result8").innerHTML = "Khoảng cách đến trường: "+'<br/>'+name1+": "+distance1+" km, "+'<br/>' +name2+": "+distance2+" km, "+'<br/>'+name3+": "+distance3+" km. "+'<br/>'+"Vậy sinh viên ở xa trường nhất là: "+TenSv_xaNhat;  
    document.getElementById("result8").style.display = "block"; //hiện kết quả
} //đóng hàm Find_Furthest

document.getElementById("btnCalc8").onclick = Find_Furthest; // gán lệnh Find_Furthest vào nút 'Tìm sinh viên xa nhất:'


//     if (edg1 != edg2 && edg1 != edg3 && edg3 != edg2 ){ //xét xem 3 cạnh có khác nhau không
//         if(edg1*edg1 + edg2*edg2== edg3*edg3 || edg1*edg1 + edg3*edg3== edg2*edg2 || edg3*edg3 + edg2*edg2== edg1*edg1 ){ //xét tiếp nó phải tam giác vuông không
//             type = "vuông"; //nếu đúng khác nhau là tam giác thường
//         mark = "tổng bình phương 2 cạnh nhỏ bằng đúng bình phương cạnh lớn.";
//         } else{
//             type = "thường"; //nếu khác nhau là tam giác thường
//             mark = "3 cạnh không bằng nhau.";
//         }


//         //nếu sai chắc chắn là tam giác cân hoặc vuông, khoan kết luận xét tiếp xem nó phải tam giác vuông nay đều
//     } else if(edg1 == edg2 && edg1 == edg3 && edg3 == edg2 ){ //xét xem phải tam giác đều không
//         type = "đều"; //nếu đúng là tam giác đều
//         mark = "3 cạnh bằng nhau.";

//     } else{
//         type = "cân"; //còn lại thì là tam giác cân
//         mark = "2 cạnh bằng nhau.";
//     }

//     document.getElementById("result4").style.display = "block"; //hiện kết quả
//     document.getElementById("result4").innerHTML = "Tam giác này là tam giác "+type+" do có "+mark
// }
// document.getElementById("btnCalc4").onclick = typeOf_Triangle; // gán lệnh typeOf_Triangle vào nút

