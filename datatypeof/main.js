//1.check 1 giá trị truyền vào có phải kiểu dữ liệu String ko ?
function isString(value) {
    return typeof value === "string";
}
console.log(isString);

console.log(isString("QangThun"));//true
console.log(isString(11));//false
console.log(isString({ age: "123" }));//false

//2.check 1 giá trị truyền vào có phải kiểu dữ liệu Number ko ?
function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}
console.log(isNumber);

console.log(isNumber(42)); // true
console.log(isNumber(NaN)); // false :số ko hợp lệ thuộc number
console.log(isNumber("42")); // false
console.log(isNumber(Infinity)); // true :đại diện cho dương vô cực +

//3.check 1 giá trị truyền vào có phải kiểu dữ liệu BigInt ko ?
function isBigInt(value) {
    return typeof value === "bigint";
}
console.log(isBigInt);// là dữ liệu lớn

console.log(isBigInt(10n)); // true
console.log(isBigInt(100)); // false
console.log(isBigInt("100")); // false
console.log(isBigInt(null)); // false

//4.check 1 giá trị truyền vào có phải kiểu dữ liệu Boolean ko ?
function isBoolean(value) {
    return typeof value === "boolean";
}
console.log(isBoolean);

console.log(isBoolean(true)); // true
console.log(isBoolean(false)); // true
console.log(isBoolean("true")); // false
console.log(isBoolean(0)); // false

//5.check 1 giá trị truyền vào có phải kiểu dữ liệu Null ko ?
function isNull(value) {
    return typeof value === null;
}
console.log(isNull);//typeof Null là Object

console.log(isNull(null)); // true
console.log(isNull(undefined)); // false
console.log(isNull("")); // false
console.log(isNull({})); // false

//6.check 1 giá trị truyền vào có phải kiểu dữ liệu Undefined ko ?
function isUndefined(value) {
    return typeof value === "undefined";
}
console.log(isUndefined);

console.log(isUndefined(undefined)); // true
console.log(isUndefined(null)); // false
console.log(isUndefined(0)); // false

//7.check 1 giá trị truyền vào có phải kiểu dữ liệu Symbol ko ?
function isSymbol(value) {
    return typeof value === "symbol";
}
console.log(isSymbol);//dùng để tạo các khóa đối tương duy nhất 

console.log(isSymbol("symbol")); // false
console.log(isSymbol(100)); // false
console.log(isSymbol(null)); // false
console.log(isSymbol(Symbol("id")));//true

//8.check 1 giá trị truyền vào có phải kiểu dữ liệu Object ko ?
function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
console.log(isObject);

console.log(isObject({})); // true
console.log(isObject([])); // false
console.log(isObject(null)); // false
console.log(isObject("object")); // false

//9.check 1 giá trị truyền vào có phải kiểu dữ liệu Array ko ?
function isArray(value) {
    return Array.isArray(value);
}
console.log(isArray);

console.log(isArray([])); // true
console.log(isArray([1, 2, 3])); // true
console.log(isArray("array")); // false
console.log(isArray(null)); // false

//10.check 1 giá trị truyền vào có phải kiểu dữ liệu Function ko ?
function isFunction(value) {
    return typeof value === 'function';
}
console.log(isFunction);

console.log(isFunction(function () { })); // true
console.log(isFunction("function")); // false
console.log(isFunction(null)); // false









