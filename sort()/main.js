// 1. Sắp xếp chuỗi
const words = ["cherry", "Chery", "banana", "apple"];
const result = words.slice().sort(); // bảo lưu mảng gốc

// console.log("🚀 ~ result:", result);
// console.log("🚀 ~ words:", words);

// 2. Sắp xếp số
// let numbers = [21, 2, 10, 3];
// numbers.sort();
// console.log("🚀 ~ numbers:", numbers);

// Xử lý truyền vào 1 hàm sắp xếp
// numbers.sort((a, b) => b - a);

// console.log("🚀 ~ numbers:", numbers);

// 3. Sắp xếp sản phẩm theo tên
// const products = ["Orange", "Apple", "Banana"];
// products.sort();
// console.log("🚀 ~ products:", products); // [ 'Apple', 'Banana', 'Orange' ]

// 4. Sắp xếp các số từ nhỏ đến lớn
const numbers = [10, 5, 40, 25, 1000, 1];

numbers.sort((a, b) => {
    return a - b;
});

console.log(numbers);

// Sắp xếp danh sách sinh viên theo tên
const students = [
    { name: "John", score: 90 },
    { name: "Bob", score: 78 },
    { name: "Alice", score: 82 },
];

students.sort((a, b) => {
    return a.name.localeCompare(b.name);
});
// console.log("b".localeCompare("a"));
console.log("🚀 ~ students:", students);

// Săp xếp danh sách sinh viên theo điểm số
// students.sort((a, b) => a.score - b.score);
// console.log("🚀 ~ students:", students);