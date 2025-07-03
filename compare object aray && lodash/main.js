var info1 = {
    name: "thuan",
    age: 18,
    address: "namdinh"
}
var info2 = {
    name: "pham",
    age: 28,
    address: "hanoi"
}
var info3 = info1;
console.log(info1 === info2); // false
console.log(info3);

// so sánh sâu chuỗi
console.log(_.isEqual(info1, info2));


// const students = [
//     { name: 'An', age: 20, gpa: 7.5 },
//     { name: '', age: 19, gpa: 8.2 },
//     { name: 'Linh', age: 17, gpa: 6.9 },
//     { name: 'Bình', age: 21, gpa: 11 },
//     { name: 'Minh', age: 22, gpa: 9.0 }
// ];

// // bài tập kiểm tra 1 obj sinh viên có tồn tại trong mảng không


// function isValidStudent(student) {
//     let studentName = student.name
//     let studentAge = student.age
//     let studentGpa = student.gpa

//     let isStudentName = _.isString(studentName) && !_.isEmpty(studentName)
//     let isStudentAge = _.isNumber(studentAge) && studentAge >= 18
//     let isStudentGpa = _.isNumber(studentGpa) && studentGpa >= 0 && studentGpa <= 10

//     return isStudentName && isStudentAge && isStudentGpa
// }

// var invalidStudent = _.filter(students, student => isValidStudent(student))
// console.log("check student sau filter >>> ", invalidStudent);


// // { name: 'An', age: 20, gpa: 7.5 },
// // { name: 'Minh', age: 22, gpa: 9.0 }

// var numbers = [1, 4, 16, 8, 9];

// const evenNumber = numbers.filter((number) => {
//     return number % 2 === 0;
// });

// console.log("Số chẵn là:", evenNumber);

// const sum = evenNumber.reduce((a, b) => a + b);
// console.log("Tổng các số chẵn là :", sum);

const products = [
    {
        id: 1,
        color: "pink",
        price: 500000,
        description: "Mô tả sản phẩm 1",
        isNew: true
    },
    {
        id: 2,
        color: "red",
        price: 600000,
        description: "Mô tả sản phẩm 2",
        isNew: true
    },
    {
        id: 3,
        color: "red",
        price: 1000000,
        description: "Mô tả sản phẩm 3",
        isNew: false
    },
];

const newProducts = products.filter(({ price, isNew }) => {
    return isNew === true && price >= 500000;
})

console.log(newProducts);
const newProducts2 = products.filter(product => product.isNew && product.price >= 500000);







