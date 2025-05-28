1.Viết hàm investmentDecision để quyết định xem có nên đầu tư vào một dự án không. Đầu tư nếu dự án có rủi ro thấp hoặc trung bình và ROI (Return on Investment) dự kiến trên 10%, hoặc nếu dự án có rủi ro cao nhưng ROI trên 20%.
Giải:
(risk = low || risk= medium ) && revenue >10 => đầu tư
risk = high && revene >20 => đầu tư
còn lại => ko đầu tư

2. Viết hàm determineTravelPlan để xác định kế hoạch du lịch dựa trên thời tiết, ngân sách, và sở thích cá nhân. Nếu thời tiết tốt, ngân sách từ 5000 trở lên và thích phiêu lưu, chọn “Du lịch núi”; nếu không thích phiêu lưu, chọn “Du lịch biển”. Nếu ngân sách nhỏ hơn 5000, chọn “Khám phá địa phương”. Nếu thời tiết xấu, luôn chọn “Hoãn kế hoạch”.
Giải:
weather= good && budget > 5000 && interest= adventure =>mountain travel
weather= good && budget > 5000 && interest= not adventure =>
sea travel
budget <5000=>Khám phá địa phương
weather=bad => Hoãn kế hoạch

3. Viết hàm determineStudentCategory để xác định loại học viên dựa trên điểm thi và tỷ lệ tham gia lớp học. Điều kiện phân loại như sau:
    * “Xuất sắc” nếu điểm từ 90 trở lên, và có mặt ít nhất 50% các buổi.
    * “Giỏi” nếu điểm từ 75 trở lên, và có mặt ít nhất 70% các buổi.
    * “Khá” nếu điểm từ 60 trở lên, và có mặt ít nhất 60% các buổi.
    * “Trung bình” nếu điểm dưới 60, hoặc vắng mặt quá 40% các buổi.
    * “Cần cải thiện” nếu vắng mặt quá 50% các buổi, bất kể điểm số.

Giải
4. Viết hàm hasAccessToWorkroom để kiểm tra xem một nhân viên có quyền truy cập vào phòng làm việc hay không. Điều kiện:
    * Là quản lý (manager), hoặc:
    * Có thẻ truy cập và đã hoàn thành bài kiểm tra an toàn.