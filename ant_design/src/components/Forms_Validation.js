import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import "../App.css";

function FormValidation() {
  return (
    <div className="App">
      <div className="header1">
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          autoComplete="off"
          onFinish={(values) => {
            console.log(values);
          }}
          onFinishFailed={(error) => {
            console.log(error);
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please Enter Your Name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Your Name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please Enter Your Email",
              },
              { type: "email", message: "Please Enter a Valid Email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
              { min: 6 },
              {
                validator: (_, value) => {
                  return value && value.includes("A")
                    ? Promise.resolve()
                    : Promise.reject("Password Does Not match Criteria");
                },
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter Password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("The Two Passwords is not same");
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select Your Gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please Provide Date of Birth",
              },
            ]}
          >
            <DatePicker
              picker="date"
              style={{ width: "100%" }}
              placeholder="Choose Your Birth Date"
            />
          </Form.Item>

          <Form.Item
            name="website"
            label="Website"
            rules={[
              {
                type: "url",
                message: "Please Enter your Valid URL",
              },
            ]}
          >
            <Input placeholder="Add your website url" />
          </Form.Item>

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 25, offset: 7 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) => {
                  return value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To Proceed, you need to agree with our terms and conditions"
                      );
                },
              },
            ]}
          >
            <Checkbox>
              Agree to our{" "}
              <a href="https://www.google.com">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24, offset: 10 }}>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default FormValidation;
