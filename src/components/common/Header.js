import React from "react";

import { Menu } from "antd";




export default function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
            <i className="fas fa-bolt"></i>    
            <a>Syx</a>
         </div>
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="features">Features</Menu.Item>
          <Menu.Item key="howiswork">How is Work</Menu.Item>
          <Menu.Item key="faqs">FAQs</Menu.Item>
          <Menu.Item key="pricing">pricing</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
