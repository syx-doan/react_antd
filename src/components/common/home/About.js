import React from "react";
import { Col, Row } from "antd";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-chart-pie"></i>,
    title: "Hig Performance",
    content:
      "cu nostro dissentias consectetus nel. Ut zboudum comcetan mie , cu eam atation fabhosrret his ex mandamus",
  },
  {
    key: "2",
    icon: <i className="fa-brands fa-github"></i>,
    title: "Hig Design",
    content:
      "cu nostro dissentias consectetus nel. Ut zboudum comcetan mie , cu eam atation fabhosrret his ex mandamus",
  },
  {
    key: "3",
    icon: <i className="fa-brands fa-discord"></i>,
    title: "Hig Work",
    content:
      "cu nostro dissentias consectetus nel. Ut zboudum comcetan mie , cu eam atation fabhosrret his ex mandamus",
  },
];

export default function AppAbout() {
  return (
    <div className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Syx is a beatyfull boy he he</p>
        </div>
        <div className="contentHolder">
          <p>
            Ant Financial has a large number of enterprise-level products. With
            complex scenarios, designers and developers often need to respond
            fast due to frequent changes in product demands and concurrent R & D
            workflow. Many similar contents exist in the process. Through
            abstraction, we could obtain some stable and highly reusable
            components and pages.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return <Col span={8} key={item.key}> 
            <div className="content">
                <div className="icon">
                    {item.icon}
                </div>
                <h3>{item.title} </h3>
                <p>{item.content}</p>
            </div>
             
            </Col>;
          })}
        </Row>
      </div>
    </div>
  );
}
