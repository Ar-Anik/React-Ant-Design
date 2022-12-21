import "antd/dist/reset.css";
import "../App.css";
import { Form, Input, Button, Checkbox } from "antd";

function FormClass() {
  const handleSubmit = (event) => {
    console.log(event);
  };

  return (
    <div className="firstform">
      <Form labelCol={{ span: 8 }} onFinish={handleSubmit}>
        <Form.Item
          label="Username"
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

export default FormClass;
