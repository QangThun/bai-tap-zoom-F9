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


