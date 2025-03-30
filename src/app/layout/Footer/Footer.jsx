import React from "react";
import { Layout } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import "./Footer.css";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="custom-footer">
      <div className="footer-content">
        {/* Logo và thông tin */}
        <div className="footer-section">
          <h2 className="footer-title">재미있는 한국어</h2>
          <p>Học tiếng Hàn dễ dàng và hiệu quả!</p>
        </div>

        {/* Thông tin liên hệ */}
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p><EnvironmentOutlined /> Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</p>
          <p><PhoneOutlined /> Điện thoại: 0901 234 567</p>
          <p><MailOutlined /> Email: contact@koreanfun.com</p>
        </div>

        {/* Bản quyền */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 재미있는 한국어 - Tất cả bản quyền được bảo lưu.</p>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
