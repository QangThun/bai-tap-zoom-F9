// var fullName = "Qang Thun";
// console.log("🚀 ~ fullName:", fullName)
// console.log(fullName.length)

// var subString = fullName.charAt(3);
// console.log(subString);

// var subString1 = fullName[5];
// console.log(subString1);

// var subStr = fullName.slice(0, 3);
// console.log(subStr);

// var subStr2 = fullName.substring(5, 7);
// console.log(subStr2);

// var subStr3 = fullName.substr(7, 9);
// console.log(subStr3);

// var upperString = fullName.toUpperCase(0);
// console.log(upperString);

// var lowerString = fullName.toLowerCase(0);
// console.log(lowerString);

// var firstName = "Quang";
// var lastName = "Thuan";
// var fullName2 = firstName + " " + lastName;
// console.log(fullName2);

// var fullName3 = firstName.concat(" Thuan");
// console.log(fullName3);

// var trimString = fullName.trim();
// console.log(trimString);

// var heelo = fullName.repeat(2);
// console.log(heelo);

// var originString = "Hello World";
// var newString3 = originString.replaceAll("Hello", "Bye");
// console.log(newString3);

// // 13. Biến chuỗi thành mảng: split
// var myString4 = "html-css-javascript";

// var arrayString = myString4.split("-");
// console.log(arrayString)
// // console.log(arrayString);

// // 14. reverse(Đảo chuỗi)

// function reverseString(str) {
//     var strArr = str.split("");
//     var reverseArr = strArr.reverse();
//     var newStr = reverseArr.join("");
//     return newStr;
// }

//  MẢNG
// var courses = [
//     "html",
//     "css",
//     "javascript",
//     "php",
//     "mysql",
//     "aaaa"
// ];

// var courses2 = [
//     "html2",
//     "css2"
// ];

// 1. độ dài phần tử của mảng: .length
// var lengthCourses = courses.length;
// console.log(lengthCourses);

// 2. Truy xuất các phần tử trong mảng
// var htmlElement = courses[courses.length - 2]
// console.log("🚀 ~ htmlElement:", htmlElement)
// 3. Thêm phần tử vào cuối mảng: push
// courses.push("mysql2");
// console.log("🚀 ~ courses:", courses)

// courses.push("myhome");
// console.log("🚀 ~ courses:", courses)


// 4. Thêm phần tử vào đầu mảng: unshift
// courses.unshift("mysql2");
// console.log("🚀 ~ courses:", courses)

// Xóa phần tử cuối mảng: pop();
// courses.pop();
// courses.pop();
// console.log(courses);

// Xóa phần tử đầu mảng: shift();
// courses.shift();
// courses.shift();
// courses.shift();
// console.log(courses);
// Nối các phần tử trong mảng
// var newCourse = [1, 2, 3];
// var courses3 = courses2.concat(courses, newCourse);
// console.log(courses3);

// Sắp xếp các phần tử trong mảng: sort()
// courses.sort();
// courses.reverse();
// console.log(courses);

// var numbers = [1, 4, 9, 2, 5];
// c1
// numbers.sort();

// c2
// numbers.sort((a, b) => b - a);

// slice(start, end)
// var subCourses = courses.slice(0);
// console.log("🚀 ~ subCourses:", subCourses);

// splice(index, quanlitydelete, add)

// var courses3 = [
//     "html",
//     "css",
//     "javascript",
//     "php",
//     "mysql",
//     "aaaa"
// ];

// mảng -> chuỗi: join
// var str = courses3.join(",");
// console.log("🚀 ~ str:", str);

// phương thức cơ bản
// phương thức: every, some, find, filter, forEach, map


// s

// khai báo: function
// tham số, đối số
// return: Đây là message: 1

// Viết 1 hàm khi người dùng click vào nút click me
// hiển thị câu message Đây là thông báo

// function showMessage2() {
//     alert("Đây là thông báo");
// }

// function showMessage2() {
//     prompt("Đây là thông báo");
// }
// BT2: Khi click vào click me thì lấy giá trị ô input yêu cầu người nhập tên, khi người dùng nhập
// PKLinh thì hiển thị popup là 'Đây là bạn nữ' ==>
// nam

// function getRectArea(width, height) {
//     var area = width * height;
//     return area;
// }

// var result = getRectArea(4, 2);
// console.log("🚀 ~ result:", result);

function showMessage(message) {
    confirm("Đây là thông báo nhé!");
    return message;
}

var message = showMessage("Đây là 11");
if (message.includes('1')) {
    prompt("Nam");
} else {
    prompt("nữ");
}

