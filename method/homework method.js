// length : độ dài của 1 mảng
var colors = ["red", "blue", "green"];
console.log("Length:", colors.length);
console.log("array length:", [].length);

// push : thêm 1, nhiều phần tử cuối mảng
colors.push("white", "orange");
console.log("Example push:", colors);

// pop : xóa phần tử cuối mảng
var lastColor = colors.pop();
console.log("Pop:", lastColor);
console.log("After pop:", colors);
colors.pop();
console.log("Example pop:", colors);

// unshift : thêm 1, nhiều phần tử đầu mảng
colors.unshift("pink");
console.log("Example unshift:", colors);

// shift : xóa phần tử đầu mảng
colors.shift();
console.log("Example shift:", colors);

// slice : cắt 1, nhiều phần ở vị trí slice(start, end)
let items1 = ["blue", "green", "yellow", "purple"];
console.log("Slice(1,3):", items1.slice(1, 3));
console.log("Slice(-2):", items1.slice(-2));

// splice : thêm, hoặc xóa phần tử ở vị trí index splice(start, deleteCount, item1, item2)
let item2 = ["blue", "green", "yellow", "purple"];
item2.splice(1, 1, "gold");
console.log("Splice vd1", item2);
item2.splice(2, 0, "silver");
console.log("Splice vd2:", item2);

// forEach : lặp các phần tử
let itam3 = ["navy", "olive", "teal"];
itam3.forEach(c => console.log("Color:", c));
let count = 0;
itam3.forEach(() => count++);
console.log("Total:", count);

// find : tìm phần tử đầu tiên thỏa mãn điều kiên (trả phần tử đầu tiên, undefined)
var found = colors.find(color => color === "blue");
console.log("Found:", found);
let number = [5, 10, 15, 20].find(n => n > 12);
console.log("Find >12:", number);

// some : check có ít nhất 1 phần tử thỏa mãn đk nào đó
var hasBlue = colors.some(color => color === "blue");
console.log("Has blue:", hasBlue);
let nums = [3, 5, 8];
console.log("Has even:", nums.some(n => n % 2 === 0));

// every : check có tất cả phần tử thỏa mãn đk
const students = [
    { id: 1, name: "An", age: 20 },
    { id: 2, name: "Bình", age: 22 },
    { id: 3, name: "Chi", age: 19 },
    { id: 4, name: "Dũng", age: 21 },
    { id: 5, name: "Hà", age: 20 }
];
var allStudent = students.every(student => student.age < 25);
console.log("All under 25:", allStudent);
console.log("All over 18:", students.every(stu => stu.age > 18));

// filter : lọc ra phần tử trong mảng (trả về phần tử tìm thấy, [])
var filtered = students.filter(student => student.age >= 21);
console.log("Filtered age >= 21:", filtered);
console.log("ID > 2:", students.filter(s => s.id > 2));


const courses = ["html", "css", "js"];

var newCoure = courses.find((course, index, orginArr) => {
    return course === "html";
});

// Tìm tất cả phần tử thỏa mã điều kiện: filter
const arr = [];

courses.filter((course) => {
    if (course === "html") {
        arr.push(course);
    }
});

// console.log("🚀 ~ htmlsArr ~ htmlsArr:", arr);

// some / every -> true / false
// pass
// const result = courses.some((course) => course.includes("html"));
// console.log("🚀 ~ result:", result);

// const result2 = courses.every((course) => {
//   return course.length > 1;
// });

// var htmlStr = 'hoc lap trình lap';

// var result = htmlStr.includes("LAP".toLowerCase(), 5);
// console.log("🚀 ~ result:", result);

// var result = courses.filter((course) => course.includes("hzzz"));
// console.log("🚀 ~ result:", result);

// var itemPop = courses.pop();
// var itemPop = courses.pop();
// console.log("🚀 ~ itemPop:", itemPop, courses);

// courses
// courses.reverse();
// console.log("🚀 ~ courses:", courses);

// flat - Làm phẳng mảng
// arr.flat([depth]) - tùy chọn. Mặc định là 1

const numbers = [1, 2, [3, 4, [5, 6, 7]], 8, 9];

const flatArr = numbers.flat(0);
// console.log("flatArr", flatArr);
// Làm phẳng tất cả các phần tử trong mảng:

// concat - Nối mảng
// var courses2 = ['php', 'nodejs'];

// var result = courses2.concat(courses, [null, false]);
// console.log("🚀 ~ result:", result);

// bài tập liên quan tính tổng tiền tất cả khóa học (front-end, back-end);
// api -> frontend, api2 -> backend
const frontendCourses = [
    {
        id: 1,
        name: "html",
        price: 600,
        type: "front-end",
    },
    {
        id: 2,
        name: "css",
        price: 400,
        type: "front-end",
    },
];

const backendCourses = [
    {
        id: 1,
        name: "php",
        price: 1200,
    },
    {
        id: 2,
        name: "nodejs",
        price: 400,
    },
    {
        id: 3,
        name: "python",
        price: 400,
    },
];

// Khóa học frontend giá bao nhiêu
var mapPriceFrontend = frontendCourses.reduce(
    (totalPrice, course) => (totalPrice += course.price),
    0
);
console.log(mapPriceFrontend);

// Khóa học backend giá bao nhiêu
var backEndPrice = backendCourses.reduce(
    (total, course) => total + course.price,
    0
);

console.log(backEndPrice);

// Tổng khóa học bao nhiêu
// console.log(`Tổng khóa học::::`, mapPriceFrontend + backEndPrice);
// const courses = [
//   "html",
//   "css",
//   "javascript",
// ];

// const coursesList = frontendCourses.concat(backendCourses);
// console.log("🚀 ~ coursesList:", coursesList);

// var total = coursesList.reduce((total, course) => total + course.price, 0);
// console.log("total", total);

const courese6 = [
    {
        id: 1,
        name: "html",
        price: 600,
        type: "front-end",
    },
    {
        id: 2,
        name: "css",
        price: 400,
        type: "front-end",
    },
    {
        id: 3,
        name: "php",
        price: 1200,
        type: "back-end",
    },
    {
        id: 4,
        name: "nodejs",
        price: 400,
        type: "back-end",
    },
    {
        id: 5,
        name: "python",
        price: 400,
        type: "back-end",
    },
];

var frontEndPrice = courese6.reduce((total, course) => {

    // if (course.type === "front-end") {
    //   return total + course.price;
    // } else {
    //   return total;
    // }

    return course.type === "front-end" ? total + course.price : total;
}, 0);

var frontEndPrice = courese6.reduce((total, course) => {
    return course.type === "front-end" ? total + course.price : total;
}, 0);

// var backEndPrice = courese6.reduce((total, course) => {
//   if (course.type === 'back-end') return total + course.price;
// });

// var fontEndCourses = courese6.filter((course) => course.type === "front-end");
// var fontEndPrice = fontEndCourses.reduce(
//   (acc, course) => acc + course.price,
//   0
// );

// var total = courese6
//   .filter((course) => course.type === "front-end")
//   .reduce((sum, course) => sum + course.price, 0)

// join(separator)
// Gộp các phần tử trong mảng --> chuỗi
// const courses9 = ["html", "css", "js"];
// const result = courses9.join('-');


// // includes: kiểm tra phần tử có tồn tại trong mảng hay chuỗi
// const resultInclu = courses9.includes("html");
// console.log("🚀 ~ resultInclu:", resultInclu);

// indexOf(value) / lastIndexOf - Tìm vị trí xuất hiện của phần tử đầu / cuối

const courese10 = ["html", "cssz", "css", "css"];
const resultIndex0f = courese10.lastIndexOf("css");
console.log("🚀 ~ resultIndex0f:", resultIndex0f);