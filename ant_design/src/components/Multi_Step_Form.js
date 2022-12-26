import {
  CheckCircleOutlined,
  LoginOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Steps } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";
const { Step } = Steps;

function LoginForm({ onFinish }) {
  return (
    <div className="custom">
      <Form labelCol={{ span: 7 }} onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="emailAddress"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please Enter a Valid Email.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please Enter Password For Login",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          style={{ left: "40px", marginTop: "10px" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

function ProfileForm() {
  return (
    <div className="custom">
      <Form labelCol={{ span: 8 }}>
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: "Enter Your First Name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Enter Your Second Name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          style={{ left: "40px", marginTop: "10px" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

function MultiForm() {
  const [current, setCurrent] = useState(0);
  const [loginDetails, setLoginDetails] = useState(null);

  const onFinishLoginForm = (values) => {
    setLoginDetails(values);
    setCurrent(1);
  };

  return (
    <div className="App">
      <Steps
        style={{ padding: "32px 32px" }}
        onChange={(number) => setCurrent(number)}
        current={current}
      >
        <Step title="Login" icon={<LoginOutlined />}></Step>
        <Step title="Profile" icon={<ProfileOutlined />}></Step>
        <Step title="Finish" icon={<CheckCircleOutlined />}></Step>
      </Steps>
      <LoginForm onFinish={onFinishLoginForm} />
      <ProfileForm />
    </div>
  );
}

export default MultiForm;
