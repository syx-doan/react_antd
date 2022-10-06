
import { Button, Checkbox, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

export default function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get Touch</h2>
          <p>Dolea nam reum blcsae Moles reum bla bla</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Please input your fullname!" }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="telePhone"
            rules={[
              { required: true, message: "Please input your telephone!" },
            ]}
          >
            <Input placeholder="Tetephone" />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[{ required: true, message: "Please input your subject!" }]}
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please input your subject!" }]}
          >
            <TextArea placeholder="Meassage" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="agree" valuePropName="checked" noStyle>
              <Checkbox>I agree width terms and conditions</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
