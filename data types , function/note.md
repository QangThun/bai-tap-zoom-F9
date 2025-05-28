1.alert (hàm thông báo)
alert("Lmao");
alert("lamo2");

2.confirm (xác nhận)
confirm(" Đủ 18 tuổi mới được vào !")
var result = confirm(" Đủ 18 tuổi mới được vào !")
console.log(result);

// 3.propmpt (giống confirm nhưng có input)
var result = prompt("Bao nhiêu mùa xuân rồi cu em!")
console.log(result);

yêu cầu người dùn nhập tuổi , nếu >=18 thì đến trang 18.html , còn lại đến 16.html


var age = prompt("Bạn nhập tuổi vào đây!");
console.log(confirm);
if (age >= 18) {
    window.location.assign("18.html");
} else {
    window.location.assign("16.html");
}

Khai báo biến
var fullName = "Qang Thun";
console.log("fullName :", fullName);
var age = 20;
console.log("age :", age);
var phone = "0378999999";
console.log("phone :", phone);
var address = "Yen Be";
console.log("address :", address);

các kiểu dữ liệu
1.string
var fullName = "Quang Thuần";
console.log(fullName);
console.log(typeof fullName);

// 2.number
var age = "20";
console.log(age);
console.log(typeof age);

//3.boolean
var isTrue = true;
var isFalse = false;

console.log(isTrue);
console.log(typeof isTrue);

console.log(isFalse);
console.log(typeof isFalse);

// 4.null
var isNull = null;
console.log(isNull);
console.log(typeof isNull);

// 5.undefined 
var isUndefined = undefined;
console.log(isUndefined);
console.log(typeof isUndefined);