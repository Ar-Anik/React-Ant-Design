import { Alert, Button, Checkbox, Form, Input } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";

function MessageClass() {
  const [showalert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    console.log(event);
    // message.success("Login Success");
    // message.error("Login Failed");
    // setTimeout(() => {
    //   message.warning("Login Failed!");
    // }, 2000);

    setTimeout(() => {
      setShowAlert(true);
    }, 2000);
  };
  return (
    <div className="firstform">
      {showalert && (
        <Alert
          type="error"
          message="error"
          description="There was an error on login"
          closable
        />
      )}
      <Form labelCol={{ span: 8 }} onFinish={handleSubmit}>
        <Form.Item
          label="UserName"
          name="username"
          rules={[
            {
              required: true,
              message: "Please Input Username",
            },
          ]}
        >
          <Input style={{ width: "30%" }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please Input Password",
            },
          ]}
        >
          <Input.Password style={{ width: "30%" }} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MessageClass;
