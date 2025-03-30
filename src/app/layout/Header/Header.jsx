import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container">
        {/* Logo bên trái */}
        <div className="logo" onClick={() => navigate("/")}>
          Học Tiếng Hàn
        </div>

        {/* Thanh tìm kiếm ở giữa */}
        <div className="search-bar">
          <Input
            placeholder="Tìm kiếm từ vựng, ngữ pháp..."
            className="search-input"
          />
          <Button type="primary" icon={<SearchOutlined />} className="search-button">
            Tìm kiếm
          </Button>
        </div>

        {/* Nút đăng nhập bên phải */}
        <Button
          type="text"
          icon={<UserOutlined />}
          className="login-button"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Header;
