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

function LoginForm({ onFinish, initialValues }) {
  return (
    <div className="custom">
      <Form
        labelCol={{ span: 7 }}
        onFinish={onFinish}
        initialValues={initialValues}
      >
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

function ProfileForm({ onFinish, initialValues }) {
  return (
    <div className="custom">
      <Form
        labelCol={{ span: 8 }}
        onFinish={onFinish}
        initialValues={initialValues}
      >
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

function Finish() {
  return (
    <>
      <h1>You Fillup All Form</h1>
      <Button type="primary">Finish</Button>
    </>
  );
}

function MultiForm() {
  const [current, setCurrent] = useState(0);
  const [loginDetails, setLoginDetails] = useState(null);
  const [profileDetails, SetProfileDetails] = useState(null);

  const onFinishLoginForm = (values) => {
    setLoginDetails(values);
    setCurrent(1);
  };

  const onFinishProfileForm = (values) => {
    SetProfileDetails(values);
    setCurrent(2);
  };

  const forms = [
    <LoginForm onFinish={onFinishLoginForm} initialValues={loginDetails} />,
    <ProfileForm
      onFinish={onFinishProfileForm}
      initialValues={profileDetails}
    />,
    <Finish />,
  ];

  const isStepDisabled = (stepNumber) => {
    if (stepNumber === 0) {
      return false;
    } else if (stepNumber === 1) {
      return loginDetails === null;
    } else if (stepNumber === 2) {
      return loginDetails === null || profileDetails === null;
    }
  };

  return (
    <div className="App">
      <Steps
        style={{ padding: "32px 32px" }}
        onChange={(number) => setCurrent(number)}
        current={current}
      >
        <Step
          title="Login"
          disabled={isStepDisabled(0)}
          icon={<LoginOutlined />}
        ></Step>
        <Step
          title="Profile"
          disabled={isStepDisabled(1)}
          icon={<ProfileOutlined />}
        ></Step>
        <Step
          title="Finish"
          disabled={isStepDisabled(2)}
          icon={<CheckCircleOutlined />}
        ></Step>
      </Steps>

      {forms[current]}
    </div>
  );
}

export default MultiForm;
