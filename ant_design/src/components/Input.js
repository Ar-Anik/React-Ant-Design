import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";

function InputClass() {
  const [value, setValue] = useState("Anik");

  return (
    <div className="App">
      <div className="header">
        <Input.Search
          placeholder="Enter Your Name"
          maxLength={10}
          prefix={<UserOutlined />}
          allowClear
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></Input.Search>
      </div>
    </div>
  );
}

export default InputClass;
