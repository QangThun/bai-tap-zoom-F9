// // các cách viết if else 
// // cách viết 1
// function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//         return "Chẵn...";

//     } else {
//         return "Lẻ...";
//     }
// }

// console.log(checkEvenOdd(7));


// // cách 2
// function checkInterger(number) {
//     if (number % 1 === 0) return "Số nguyên";
//     return "0 phải số nguyên";
// }

// console.log(checkInterger(1.5));

// //cách 3
// function checkInterger2(number) {
//     return number ? "Số nguyên" : "0 phải số nguyên"
// }
// console.log(checkInterger2(1));

// // các bài toán sử dụng switch case
// // 1. bài toán xác định số ngày 1 tháng, check tháng nhuận 
// var month = 2;
// var year = 2020;

// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Tháng này có 31 ngày");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Tháng này có 30 ngày");
//         break;
//     case 2:
//         // Kiểm tra năm nhuận
//         ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? console.log("Tháng này có 29 ngày") : console.log("Tháng này có 28 ngày");
//         break;
//     default:
//         console.log("Không hợp lệ! ");
// }

// //2. chữa lại lõi sai bài hôm qua
// function calculator(operator, a, b) {
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return b === 0 ? "Không thể chia cho 0" : a / b;
//         default:
//             return "Phép tính không hợp lệ";
//     }
// }

// //vd
// console.log(calculator('+', 3, 5));
// console.log(calculator('-', 3, 5));
// console.log(calculator('/', 10, 2));
// console.log(calculator('/', 10, 0));
// console.log(calculator('**', 2, 2));


//luyentap(note)
//bai1: risk:rủi ro , profitrate : tỉ suất lợi nhuân,investmentDecision:quyết định đầu tư
//c1
function investmentDecision(risk, profitRate) {
    if ((risk === "low" || risk === "medium") && profitRate > 0.1) {
        return "Đầu tư";
    } else if (risk === "high" && profitRate > 0.2) {
        return "Đầu tư";
    } else
        return "Ko đầu tư";
}
var result1 = investmentDecision("medium", 0.2);
console.log("kq1: ", result1);

//c2
function investmentDecision(risk, profitRate) {
    if (((risk === "low" || risk === "medium") && profitRate > 0.1)
        ||
        (risk === "high" && profitRate > 0.2)) return "Đầu tư..."
    return "Không đầu tư..."
}
var result2 = investmentDecision("high", 0.1);
console.log("kq2: ", result2);

//c3
function investmentDecision(risk, profitRate) {
    if (risk !== "high") {
        return profitRate > 0.1 ? "Đầu tư..." : "Không đầu tư..."
    }
    return profitRate > 0.2 ? "Đầu tư" : "Không đầu tư..."
}
var result3 = investmentDecision("high", 0.1);
console.log("kq3: ", result3);


//bai2: determineTravelPlan:xđinh kế hoạch du lịch , weather:thời tiết , budget :ngân sách , lovesAdventure:thích phưu lưu
//c1
function determineTravelPlan(weather, budget, lovesAdventure) {
    var lovesAdventure = "adventure";
    if (weather === "good") {
        if (budget >= 5000) {
            if (lovesAdventure) return "Du lịch núi..."
            return "Du lịch biển";
        } else {
            return "Khám phá địa phương...";
        }
    }
    return "Hoãn kế hoạch..."
}

var result4 = determineTravelPlan("good", 5000, true);
console.log("kq4: ", result4)

//c2 :badweather:thời tiết xấu
function determineTravelPlan(badweather, budget, lovesAdventure) {
    if (badweather) {
        return "Hoãn kế hoạch...";
    }
    if (budget >= 5000) {
        return lovesAdventure ? "Du lịch núi..." : "Du lịch biển...";
    }
    return "Khám phá địa phương..."
}
var badweather = false;
var lovesAdventure = false;
var result5 = determineTravelPlan(badweather, 4000, lovesAdventure);
console.log("kq5: ", result5)

//c3
function determineTravelPlan(badweather, budget, lovesAdventure) {
    if (budget >= 5000) {
        if (badweather !== true) {
            return lovesAdventure = true ? "Du lịch núi..." : "Du lịch biển...";
        }
        return "Hoãn kế hoạch...";
    }
    if (badweather !== true) return "Khám phá địa phương";
    return "Hoãn kế hoạch...";
}
var result6 = determineTravelPlan(true, 4000, true);
console.log("kq6: ", result6);


//bai3:determineStudentCategory:xác định danh mục học sinh ,point: điểm ,classAttendanceRate: tỉ lệ tham gia lớp học

function determineStudentCategory(point, classAttendanceRate) {
    if (point >= 90 && point <= 100 && classAttendanceRate >= 0.5) {
        return "Xuất sắc";
    } else if (point >= 75 && point < 90 && classAttendanceRate >= 0.7) {
        return "Giỏi";
    } else if (point >= 60 && point < 75 && classAttendanceRate >= 0.6) {
        return "Khá";
    } else if (point < 60 || classAttendanceRate < 0.6) {
        return "Trung bình";
    } else if (classAttendanceRate < 0.5) {
        return "Cần cải thiện"
    }
}

var result7 = determineStudentCategory(90, 0.5);
console.log("kq7: ", result7);

//c2
function determineStudentCategory(point, classAttendanceRate) {
    if (classAttendanceRate < 0.5) {
        return "Học cải thiện...";
    }
    if ((point >= 90 && point <= 100) && classAttendanceRate >= 0.5) {
        return "Xuất sắc...";
    }
    if (point >= 75 && classAttendanceRate >= 0.7) {
        return "Giỏi...";
    }
    if (classAttendanceRate >= 0.6) {
        return point >= 60 ? "Khá..." : "Trung bình...";
    }
}
var result8 = determineStudentCategory(50, 0.7);
console.log("kq8: ", result8);
//bai4: hasAccessToWorkroom:có quyền truy cập vào phòng làm việc , managementPosition:chức vụ quản lý,acccessCard: thẻ truy cập ,safetyTest:bài kiểm tra An toàn

//c1
function hasAccessToWorkroom(managementPosition, acccessCard, safetyTest) {
    if (managementPosition || (acccessCard && safetyTest)) return "Có quyền truy cập..."
    return "Không có quyền truy cập vào...";
}
var result9 = hasAccessToWorkroom(false, true, false);
console.log("kq9: ", result9);

//c2 
function hasAccessToWorkroom(managementPosition, acccessCard, safetyTest) {
    if (acccessCard) {
        return safetyTest ? "Có quyền truy cập..." : "Không có quyền truy cập...";
    }
    if (managementPosition) return "Có quyền truy cập..."
    return "Không có quyền truy cập...";
}
var result10 = hasAccessToWorkroom(true, false, false);
console.log("kq10: ", result10);

