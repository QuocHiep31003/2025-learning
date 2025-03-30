import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Layout } from "antd";
import "./PageLayout.css"; // Import file CSS riêng

const { Content } = Layout;

const PageLayout = ({ children }) => {
  return (
    <Layout className="page-layout">
    <Header/>
      <Navbar />
      <Content className="page-content">{children}</Content>
      <Footer />
    </Layout>
  );
};

export default PageLayout;
