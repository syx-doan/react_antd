import React from "react";

import { Col, Row, Card } from "antd";
import img1 from "../../../assets/images/advanced-option.jpg";
import img2 from "../../../assets/images/easy-customise.jpg";
import img3 from "../../../assets/images/unlimited-features.jpg";
import img4 from "../../../assets/images/great-support.jpg";
import img5 from "../../../assets/images/modern-design.jpg";
import img6 from "../../../assets/images/clean-design.jpg";

const { Meta } = Card;

const items = [
  {
    title: "Syx Doan",
    img: img1,
  },
  {
    title: "Syx Viet",
    img: img2,
  },
  {
    title: "Hehe Doan",
    img: img3,
  },
  {
    title: "Muaa Doan",
    img: img4,
  },
  {
    title: "CoDon Doan",
    img: img5,
  },
  {
    title: "TroiOi Doan",
    img: img6,
  },
];

export default function AppFeature() {
  return (
    <div id='feature' className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key feature And Binist</h2>
          <p>Ocbation conseayus lirob requidiadea , acriam ieam loabum</p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item, index) => {
            return (
              <Col span={8} key={index}>
                <Card hoverable cover={<img alt="example" src={item.img} />}>
                  <Meta title={item.title} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
