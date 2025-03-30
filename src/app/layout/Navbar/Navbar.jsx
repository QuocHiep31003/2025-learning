import React from "react";
import { Menu } from "antd";
import { HomeOutlined, BookOutlined, FileTextOutlined, FileSearchOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Menu mode="horizontal" theme="light" className="menu" selectable={false}>
        <Menu.Item key="about" icon={<InfoCircleOutlined />} onClick={() => navigate("/about")}>
          Giới thiệu
        </Menu.Item>
        <Menu.Item key="vocabulary" icon={<BookOutlined />} onClick={() => navigate("/vocabulary")}>
          Từ vựng
        </Menu.Item>
        <Menu.Item key="grammar" icon={<FileTextOutlined />} onClick={() => navigate("/grammar")}>
          Ngữ pháp
        </Menu.Item>
        <Menu.Item key="resources" icon={<FileSearchOutlined />} onClick={() => navigate("/resources")}>
          Tài liệu
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
