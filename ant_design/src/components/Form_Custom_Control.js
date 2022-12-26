import { Button, Form, Input } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function PlayerScores(props) {
  const { value, onChange } = props;
  return (
    <>
      <Button
        onClick={() => {
          onChange(value - 1);
        }}
      >
        -
      </Button>
      <span style={{ margin: "10px" }}>{value}</span>
      <Button
        onClick={() => {
          onChange(value + 1);
        }}
      >
        +
      </Button>
    </>
  );
}

function AdminEmail({ value }) {
  return <Input defaultValue={value} />;
}

function CustomForm() {
  return (
    <div className="App">
      <div className="header1">
        <Form
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(failedValues) => {
            console.log({ failedValues });
          }}
          initialValues={{ playerScore: 0, adminEmail: "admin@gmail.com" }}
        >
          <Form.Item
            name="playerName"
            label="Player Name"
            required
            rules={[
              {
                required: true,
                message: "Please Enter Player Name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="playerScore"
            label="Player Score"
            required
            rules={[
              {
                validator(rule, value) {
                  return new Promise((resolve, reject) => {
                    if (value >= 0) {
                      resolve();
                    } else {
                      reject(
                        "The Score Should be Grater Than or Equal to Zeor"
                      );
                    }
                  });
                },
              },
            ]}
          >
            <PlayerScores />
          </Form.Item>

          <Form.Item
            name="adminEmail"
            label="Admin Email"
            required
            rules={[
              {
                type: "email",
                message: "It is not a valid email",
              },
              {
                validator(rule, value) {
                  return new Promise((resolve, reject) => {
                    if (String(value).startsWith("admin")) {
                      resolve();
                    } else {
                      reject("The Email Should Start With Admin");
                    }
                  });
                },
              },
            ]}
          >
            <AdminEmail />
          </Form.Item>

          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CustomForm;
