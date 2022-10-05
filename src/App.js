import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Layout } from "antd";
import AppHeader from "./components/common/Header";
import AppHome from "./views/Home";

const { Header,Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
      <AppHeader/>
      </Header>

      <Content>
        <AppHome/>
      </Content>
    </Layout>
  );
}

export default App;
