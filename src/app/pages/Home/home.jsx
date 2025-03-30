import React from "react";
import { Button } from "antd";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Chào mừng đến với 재미있는 한국어!</h1>
      <p className="home-subtitle">
        Học từ vựng, ngữ pháp và giao tiếp một cách dễ dàng cùng chúng tôi.
      </p>

      <section className="home-section">
        <h2>📚 Về Khóa Học</h2>
        <p>
          재미있는 한국어 cung cấp chương trình học tiếng Hàn từ cơ bản đến nâng cao,
          giúp bạn thành thạo tiếng Hàn trong thời gian ngắn nhất.
        </p>
      </section>

      <section className="home-section">
        <h2>🎯 Lợi Ích Khi Học Cùng Chúng Tôi</h2>
        <ul>
          <li>✅ Hệ thống bài giảng trực quan, dễ hiểu</li>
          <li>✅ Học qua video, bài tập thực hành, và câu hỏi trắc nghiệm</li>
          <li>✅ Phát triển kỹ năng nghe - nói - đọc - viết</li>
          <li>✅ Học cùng giáo viên bản xứ và cộng đồng học viên</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>📝 Nội Dung Khóa Học</h2>
        <p>
          Chương trình học được thiết kế bài bản, bao gồm:
        </p>
        <ul>
          <li>📌 Từ vựng & ngữ pháp theo chủ đề</li>
          <li>📌 Mẫu câu thông dụng trong giao tiếp</li>
          <li>📌 Luyện nghe và phát âm chuẩn</li>
          <li>📌 Học viết và luyện dịch</li>
          <li>📌 Bài kiểm tra đánh giá trình độ</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>🎥 Phương Pháp Học</h2>
        <p>
          Chúng tôi áp dụng phương pháp học tập thông minh:
        </p>
        <ul>
          <li>🔹 Học qua hình ảnh và video</li>
          <li>🔹 Tương tác với giáo viên và bạn bè</li>
          <li>🔹 Luyện nói với công nghệ AI</li>
          <li>🔹 Chơi game để ghi nhớ từ vựng lâu hơn</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>🌟 Học Ngay Hôm Nay!</h2>
        <p>
          Đừng chần chừ! Hãy bắt đầu hành trình học tiếng Hàn ngay bây giờ để mở
          ra những cơ hội mới cho bản thân!
        </p>
        <Button type="primary" size="large">Đăng ký ngay</Button>
      </section>
    </div>
  );
};

export default Home;