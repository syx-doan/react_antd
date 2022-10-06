import { Button, Modal } from "antd";
import React, { useState } from "react";

export default function AppWork() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div id='work' className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it Work</h2>
          <p>persicripaos vero simlique, ut ducimus midi ispan autem emprora</p>
        </div>
        <div className="contentHolder">
        <Button onClick={showModal}>
         <i className="fas fa-play"></i>
        </Button>
        </div>

        <Modal
          title="Youtube Cuar Tui Nek"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <iframe title="Welcome to Syx" width="100%" src="https://www.youtube.com/channel/UCbAZqTD9Z_6OgqUbPJKgcrQ">

          </iframe>
        </Modal>
      </div>
    </div>
  );
}
