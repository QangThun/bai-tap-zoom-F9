// các cách viết if else 
// cách viết 1
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Chẵn...";

    } else {
        return "Lẻ...";
    }
}

console.log(checkEvenOdd(7));


// cách 2
function checkInterger(number) {
    if (number % 1 === 0) return "Số nguyên";
    return "0 phải số nguyên";
}

console.log(checkInterger(1.5));

//cách 3
function checkInterger2(number) {
    return number ? "Số nguyên" : "0 phải số nguyên"
}
console.log(checkInterger2(1));

// các bài toán sử dụng switch case
// 1. bài toán xác định số ngày 1 tháng, check tháng nhuận 
var month = 2;
var year = 2020;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tháng này có 31 ngày");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tháng này có 30 ngày");
        break;
    case 2:
        // Kiểm tra năm nhuận
        ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? console.log("Tháng này có 29 ngày") : console.log("Tháng này có 28 ngày");
        break;
    default:
        console.log("Không hợp lệ! ");
}

//2. chữa lại lõi sai bài hôm qua
function calculator(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b === 0 ? "Không thể chia cho 0" : a / b;
        default:
            return "Phép tính không hợp lệ";
    }
}

// Ví dụ sử dụng:
console.log(calculator('+', 3, 5));
console.log(calculator('-', 3, 5));
console.log(calculator('/', 10, 2));
console.log(calculator('/', 10, 0));
console.log(calculator('**', 2, 2));




