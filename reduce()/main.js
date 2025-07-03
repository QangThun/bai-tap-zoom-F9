// 1. Tính tổng tất cả các số có trong mảng
const numbers = [1, 2, 3, 4];

// total = 0, number = 1, sau lần lặp đầu tiên biến tích lũy total + number = 1
// total = 1, number = 2, sau lần lặp thứ hai biến tích lũy total + number = 3
// total = 3, number = 3, sau lần lặp thứ ba biến tích lũy total + number = 6
// total = 6, number = 4, sau lần lặp thứ tư biến tích lũy total + number = 10
// Tổng hợp 4 lần lặp

// Nếu không lấy giá trị khởi tạo thì sao nhỉ???
// Thì lần đầu sẽ lấy giá trị đầu tiên là giá trị tích lũy, và lần lặp sẽ bắt đầu phần tử thứ hai
// tức là sẽ có các phần lặp như sau
/**
 * total = 1, number = 2
 * total = 3, number = 3
 * total = 6, number = 6
 * Vì vậy sẽ có 3 lần lặp
 *
 * */

// const result = numbers.reduce((total, number, index) => {
//     console.log(`index ${index}`); // 0, 1, 2, 3
//     return total + number;
// }, 0);


// // Tính total dùng vòng lặp thông thường
// // Biến tích lũy: Giá trị khởi tạo
// let total = 0;

// numbers.forEach(number => {
//     // Tích lũy giá trị
//     total += number;
// });

// 2. Tính tổng giá các phần tử trong mảng
// const products = [
//     { name: "Iphone", price: 100 },
//     { name: "Ipad", price: 200 },
//     { name: "Macbook", price: 300 },
// ];

// const result = products.reduce((total, product) => {
//     return total + product.price;
// }, 0);

// 3. Tính tổng giá trị đơn hàng
const order = {
    code: "#DH001",
    products: [
        { name: "Iphone", price: 100, quantity: 1 },
        { name: "Ipad", price: 200, quantity: 3 },
        { name: "Macbook", price: 300, quantity: 2 },
    ]
};

// const result = order.products.reduce((total, product) => {
//     return total + (product.price * product.quantity);
// }, 0);

const result2 = order.products.reduce((total, product) => total + (product.price * product.quantity), 0)
console.log(result2);
// 4. Tạo 1 object với các giá trị ban đầu và số lần xuất hiện
const items = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

// obj = {}
const result = items.reduce((obj, item) => {
    if (item in obj) {
        obj[item]++;
    } else {
        obj[item] = 1;
    }

    return obj;
}, {});
// console.log("🚀 ~ result ~ result:", result);

// Expected (kết quả kỳ vòng)
// { apple: 3, banana: 2, orange: 1 } 

// noi chu
const chars = ['T', 'h', 'u', 'a', 'n'];
const word = chars.reduce((result, char) => result + char);
console.log(word);

// tim so lon nhat
const number = [3, 7, 2, 10, 5];

const max = number.reduce((a, b) => a > b ? a : b); // so sanh a b de tim ra so lon nhat
console.log(max);

