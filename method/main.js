// nhớ 10% --> nhiều bài tập liên quan -> làm lại xem đi xem lại --> tự code lại 
// const courses = [
//   "html",
//   "css",
//   "javascript",
//   null,
//   undefined
// ];

// 1. Độ dài 1 mảng .length
// var coursesLength = courses.length;
// console.log("🚀 ~ coursesLength:", coursesLength);

// 2. Thêm 1 phần tử vào mảng: push
// courses.push("php");
// courses.push("php1");
// courses.push("php2");
// console.log("🚀 ~ courses:", courses);
// console.log("🚀 ~ coursesLength:", courses.length);

// 3. Xóa phần tử cuối mảng pop
const courses = [
    "html",
    "css",
    "javascript",
    null,
    undefined
];

var newCourses = courses.pop(); // ?A
// console.log("🚀 ~ newCourses:", newCourses);

var newCourses2 = courses.pop(); // ?B
// courses // C

// courses.pop();
// courses.pop();
// courses.pop();
// courses.pop();
// courses.pop();
// courses.pop();
// courses.pop();
// console.log("🚀 ~ newCourses2:", newCourses2);
// console.log("🚀 ~ courses:", courses); // C

// 4. Thêm 1 hoặc nhiều phần tử vào đầu mảng: unshift()
// courses.unshift("mysql", "mysql2", "mysql3");
// console.log("🚀 ~ courses:", courses); // C

// 5. Xóa 1 hoặc nhiều phần tử đầu mảng shift()
courses.shift();
courses.shift();
courses.shift();
// console.log("🚀 ~ courses:", courses);

// Lấy ra mảng con từ mảng gốc ["html"] - slice(start, end)
// Cắt phần tử trong mảng theo index
const courses2 = [
    "html", // 0
    "css", // 1
    "javascript", // 2
];

// var newArr = courses2.slice(0, 1); // Ctrl + Alt + L
// console.log("🚀 ~ newArr:", newArr);

// var newArr = courses2.slice(1, 2); // ["css"]
// console.log("🚀 ~ newArr:", newArr);

// Các cách cắt tất cả phần tử bằng slice
// 1. Mục đích
// 2. Thực hành
// 3. Xem kết quả -> kiến thức

/**
 * slice(0)
 * slice(0, length),  slice(0, length)
 * slice(0, 5)
 */

var newArr = courses2.slice(0);
// console.log("🚀 ~ newArr:", newArr);

// console.log(courses2.length);

// var newArr2 = courses2.slice(0, courses2.length);
// console.log("🚀 ~ newArr2:", newArr2);

// var newArr3 = courses2.slice(0, 4);
// console.log("🚀 ~ newArr2:", newArr3)

// console.log(courses2 === newArr); // true, false x001z === x002z

// So sánh nội dung của 2 array giống nhau, true
const courses3 = [
    "html",
    "css",
    "javascript",
];

const courses3Copy = [
    "html",
    "css",
    "javascript",
];

// keyword: JSON.stringify, lodash
var stringCourse3 = JSON.stringify(courses3);
var stringCourse4 = JSON.stringify(courses3Copy);

// console.log(stringCourse3 === stringCourse4); // false
// console.log(stringCourse3, typeof stringCourse3)

// check input đầu vào có phải string hay không
// function checkIsString(input) {
//   return typeof input === "string";
// }

// var result = checkIsString(undefined);
// console.log("🚀 ~ result:", result);
// console.log(_.isEqual(courses3, courses3Copy)); // true, thư viện lodash

// const obj1 = {
//   name: "Hoan Nguyen"
// };

// const obj2 = {
//   name: "Hoan Nguyen"
// };

// console.log(_.isEqual(obj1, obj2));

//  Javascript Basic
// kiểu dữ liệu (Data Types)

/**
 * number - 'number'
 * string - 'string'
 * undefined - undefined
 * null - null, object
 * boolean - boolean
 * NaN - number
 * object - "object"
 * array - "object"
 * function - "function"
 * symbol - "symbol"
 */

// splice(start, deleteCount, item1, item2)
// input
const courses4 = [
    "html", // 0
    "css", // 1
    "javascript" // 2,
];

const courses5 = [
    "html",
    "scss",
    "javascript",
];

// courses4.splice(1, 1, "scss");
// console.log(courses4);


// Expect:
// [
//   "html",
//   "php",
//   "nodejs",
//   "javascript",
// ];
// courses4.splice(1, 1, "php", "nodejs");
// console.log("🚀 ~ courses4:", courses4)

const students = [
    {
        id: 1,
        name: "Hoan Nguyen",
        age: 24,
        address: "Cau Giay, HN"
    },
    {
        id: 2,
        name: "Thuan Pham",
        age: 20,
        address: "Tien Hai, Thai Binh"
    },
    {
        id: 3,
        name: "Minh Hoàng",
        age: 22,
        address: "An Dương, Hai Phong"
    }
];


// Khi website tải xong, hiển thị sản phẩm 
document.addEventListener("DOMContentLoaded", () => {
    console.log("hien thi sinh vien");
});

students.forEach((student) => {
    console.log(student);
});


const students5 = [
    {
        id: 1,
        name: "hoan Nguyen",
        age: 24,
        address: "Cau Giay, HN",
    },
    {
        id: 2,
        name: "thuan tham",
        age: 20,
        address: "Tien Hai, Thai Binh",
    },
    {
        id: 3,
        name: "MINH HOANG",
        age: 22,
        address: "An Dương, Hai Phong",
    }
];

// Minh Hoang, Thuan Pham

var newStudents = students5.map(student => {
    return {
        name: student.name
    };
}); // ???

console.log("🚀 ~ newStudents:", newStudents); // clone array
const tags = ["book", "book2", "book3"]; // ["#book", "#book2", "#book3"];

var newTags = tags.map(tag => `#${tag}`);
console.log(newTags);

// for --> nhận --> áp lực --> bỏ công ty --> chuẩn bị kiến thức chắc --> luyện đánh 6,1 nắm
// tự tin (kiến thức nhỏ --> nhỏ): tự em làm
// nhiều kiến thức, không tự tin

// method array....
// live coding...
// chủ đề
// MAP, FILTER

// trade off (time, công sức --> $$$$$), $$$$$ --> value, update bản thân
//
// bỏ công bỏ sức... tự em bỏ ra... tự bản thân thiếu cái gì
// cancel, nghề output -> kết toán  3,4 fressher
// mâp tập trung, mất niềm tin (thằng lowng 2x, bản thân cần cải thiện update...)