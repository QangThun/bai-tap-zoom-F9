//1.check 1 giá trị truyền vào có phải kiểu dữ liệu String ko ?
// function isString(value) {
//     return typeof value === "string";
// }
// console.log(isString);

// console.log(isString("QangThun"));//true
// console.log(isString(11));//false
// console.log(isString({ age: "123" }));//false

//2.check 1 giá trị truyền vào có phải kiểu dữ liệu Number ko ?
// function isNumber(value) {
//     return typeof value === "number" && !isNaN(value);
// }
// console.log(isNumber);

// console.log(isNumber(42)); // true
// console.log(isNumber(NaN)); // false :số ko hợp lệ thuộc number
// console.log(isNumber("42")); // false
// console.log(isNumber(Infinity)); // true :đại diện cho dương vô cực +

//3.check 1 giá trị truyền vào có phải kiểu dữ liệu BigInt ko ?
// function isBigInt(value) {
//     return typeof value === "bigint";
// }
// console.log(isBigInt);// là dữ liệu lớn

// console.log(isBigInt(10n)); // true
// console.log(isBigInt(100)); // false
// console.log(isBigInt("100")); // false
// console.log(isBigInt(null)); // false

//4.check 1 giá trị truyền vào có phải kiểu dữ liệu Boolean ko ?
// function isBoolean(value) {
//     return typeof value === "boolean";
// }
// console.log(isBoolean);

// console.log(isBoolean(true)); // true
// console.log(isBoolean(false)); // true
// console.log(isBoolean("true")); // false
// console.log(isBoolean(0)); // false

//5.check 1 giá trị truyền vào có phải kiểu dữ liệu Null ko ?
// function isNull(value) {
//     return value === null;
// }
// console.log(isNull);//typeof Null là Object

// console.log(isNull(null)); // true
// console.log(isNull(undefined)); // false
// console.log(isNull("")); // false
// console.log(isNull({})); // false

//6.check 1 giá trị truyền vào có phải kiểu dữ liệu Undefined ko ?
// function isUndefined(value) {
//     return typeof value === "undefined";
// }
// console.log(isUndefined);

// console.log(isUndefined(undefined)); // true
// console.log(isUndefined(null)); // false
// console.log(isUndefined(0)); // false

//7.check 1 giá trị truyền vào có phải kiểu dữ liệu Symbol ko ?
// function isSymbol(value) {
//     return typeof value === "symbol";
// }
// console.log(isSymbol);//dùng để tạo các khóa đối tương duy nhất 

// console.log(isSymbol("symbol")); // false
// console.log(isSymbol(100)); // false
// console.log(isSymbol(null)); // false
// console.log(isSymbol(Symbol("id")));//true

//8.check 1 giá trị truyền vào có phải kiểu dữ liệu Object ko ?
// function isObject(value) {
//     return value !== null && typeof value === 'object' && !Array.isArray(value);
// }
// console.log(isObject);

// console.log(isObject({})); // true
// console.log(isObject([])); // false
// console.log(isObject(null)); // false
// console.log(isObject("object")); // false

//9.check 1 giá trị truyền vào có phải kiểu dữ liệu Array ko ?
// function isArray(value) {
//     return Array.isArray(value);
// }
// console.log(isArray);

// console.log(isArray([])); // true
// console.log(isArray([1, 2, 3])); // true
// console.log(isArray("array")); // false
// console.log(isArray(null)); // false

//10.check 1 giá trị truyền vào có phải kiểu dữ liệu Function ko ?
// function isFunction(value) {
//     return typeof value === 'function';
// }
// console.log(isFunction);

// console.log(isFunction(function () { })); // true
// console.log(isFunction("function")); // false
// console.log(isFunction(null)); // false


//Bài tập 2 :
//1.Viết hàm welcomeUser có tham số name .Hàm trả về "Chào mừng [name]".nếu tham số 0 phải chuỗi , trả về "Tên ko hợp lệ"
function welcomeUser(name) {
    if (typeof name === "string") return `Chào mừng ${name}!`
    return "Tên ko hợp lệ...!";
}

// console.log("Bài 1: ");
// console.log(welcomeUser("qangthun"));
// console.log(welcomeUser(123));

//2.Viết hàm calculateAge có hai tham số currentYear(năm hiện tại) và birthYear(năm sinh) để tính số tuổi .Hàm trả về số tuổi,trong trường hợp ko hợp lệ thì trả về 1
function calculateAge(currentYear, birthYear) {
    let currentYearIsNumber = isNumber(currentYear);
    let birthYearIsNumber = isNumber(currentYear);

    if (isNumber(currentYear) && isNumber(currentYear)) {
        return currentYear - birthYear;
    }

    return -1;
}

// console.log(calculateAge(2025, 2000)); // 25
// console.log(calculateAge(2025, 1994)); // 31
// console.log(calculateAge("2025", "abc")); // Error: -1

//3.Viết hàm getElementAtIndex(lấy ptu tại mục) có hai tham số array , index .Hàm trả về giá trị tại index tương ứng .Nếu array ko p mảng , or index ko p số hợp lệ , or index nhỏ hơn 0 thì hàm trả về null
function getElementAtIndex2(array, index) {
    // array, index là số hợp lệ, index >= 0 ==> array[index]
    // null
    let elementIsArray = Array.isArray(array);
    let indexIsNumber = isNumber(index);

    if (elementIsArray && indexIsNumber && index >= 0) {
        return array[index];
    }

    return null;
}

// console.log(getElementAtIndex([123, 456, 789], 4));
// console.log(getElementAtIndex2([123, 456, 789], -4));

//4.Viết hàm checkEmpty(Kiểm tra trốg) có tham số value .Hàm trả về "Trống" nếu là null hoặc undefined , thop khác trả về ko trống
function checkEmpty(value) {
    let valueIsNull = isNull(value);
    let valueIsUndefined = isUndefined(value);

    if (valueIsNull || valueIsUndefined) {
        return 'Trống';
    }

    return 'Không trống';
}

// console.log(checkEmpty(null)); // Trống
// console.log(checkEmpty2(undefined)); // Trống
// console.log(checkEmpty2("Hoan")); // Không trống
//ko dùng typeof cho null , array, NaN

//5.Hãy viết 1 hàm covertDataType nhận vào hai tham số value và type .Hàm này thực hiện chuyển đổi value sang kiểu dữ liệu sang kiểu đc chỉ định type , có thể là number , string , boolean .nếu type ko phải thì trả về chuỗi "Invalid
// type"
function covertDataType(value, type) {
    switch (type) {
        case "number":
            return Number(value);
        case "string":
            return String(value);
        case "boolean":
            return Boolean(value);
        default:
            return "Invalid type";
    }
}
console.log("Bài 5: ");
console.log(covertDataType(123, "number"));
console.log(covertDataType(1, "boolean"));
console.log(covertDataType(123, "string"));
console.log(covertDataType(123, "object"));

//6.Viết hàm calcute nhận 3 tham số : a, b ,operator .Hàm này thực hiện phép toán ( add, subtract , multiply , divide), xử lý trường hợp NaN
function caculate(a, b, operator) {
    let isNotNumberA = isNaN(a);
    let isNotNumberB = isNaN(b);

    if (isNotNumberA || isNotNumberB) {
        return "Invalid input number";
    }
    switch (operator) {
        case "add":
            let NumberA = Number(a);
            let NumberB = Number(b);
            var result = NumberA + NumberB;
            return result;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b == 0) return "Cannot divide by zero";
            return a / b;
        default:
            return "Invalid type";
    }
}

console.log("Bài 6: ");
console.log(caculate("5", "6", "add")); // 11
console.log(caculate("10", "0", "divide")); // Cannot divide by zero
console.log(caculate("5", "six", "add")); // Invalid input number
console.log(caculate("10", "0", "percent")); // Invalid type

