import { Button, Collapse } from "antd";
import React from "react";

const { Panel } = Collapse;

export default function AppFaq() {
  const text = `
  Hello các bạn, tiếng anh là kĩ năng rất quan trọng trong học tập lẫn trong công việc. Trong học tập, giúp bạn tìm được thông tin mới nhất và chính xác. Trong công việc, biết thêm một ngôn ngữ cơ hội thăng tiến dễ dàng hơn.`;
  return (
    <div id="faq" className="block faqBlock">

      <div className="container-fluid">
        <div className="titleHolder">
            <h2>Freequenty Asked Questions</h2>
            <p>Giới thiệu: là một ứng dụng giúp học từ vựng. Memrise giúp bạn học về kĩ năng</p>
        </div>
        <Collapse>
          <Panel header="Tổng hợp tài liệu tự học tiếng anh cơ bản." key="1">
            <Collapse defaultActiveKey="1">
              <Panel
                header="Giới thiệu: là một ứng dụng giúp học từ vựng. Memrise giúp bạn học về kĩ năng listenning - nghe."
                key="1"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel
            header="Giới thiệu: là một website giúp bạn tra cứu các từ vựng. Tương tự Dictionary Cambridge"
            key="2"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="Giới thiệu: là một ứng dụng giúp học từ vựng phù hợp cho nhiều độ tuổi."
            key="3"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
            <h3>Want quick support</h3>
            <p> A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            <Button type="primary"><i class="fas fa-regular fa-envelope"></i>Email your Question</Button>
        </div>
      </div>
    </div>
  );
}
