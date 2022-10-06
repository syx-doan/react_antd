import React from "react";
import { Button, Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "Xin các bạn tại F8, khi mình đọc những bài viết trên nhóm F8 thì",
    content:
      "W3School: là 1 trang web học code miễn phí đang tin cậy với nhiều bài giảng chất lượng có đầy đủ cả lý thuyết lận thực hành với nhiều bài code mẫu ngay sau những kiến thức lý thuyết cực kỳ trực quan.",
  },
  {
    key: "2",
    title: "Khi mình đọc những bài viết trên nhóm F8 thì",
    content:
      "như một kho thư viện định nghĩa các thuộc tính, chức năng và cách sử dụng của các thẻ, hàm, câu lệnh… của các ngôn ngữ như HTML, CSS, Javascript,… vô cùng đầy đủ và chính xác",
  },
  {
    key: "3",
    title: "Xin các bạn tại F8",
    content:
      "Visual studio code: là 1 trình soạn thảo code được nhiều người sử dụng nhất hiện nay với khả năng code được nhiều ngôn ngữ và rất nhiều extension hổ trợ cho việc code",
  },
];

export default function AppHero() {
  return (
    <div id='hero' className="heroBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div className="container-fluid" key={item.key}>
              <div className="content">
                <h3>{item.title}</h3>
                <p> {item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Read More
                  </Button>
                  <Button size="large">
                    <i className="fas fa-desktop"></i>
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
