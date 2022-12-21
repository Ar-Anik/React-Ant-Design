import { PoweroffOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";

function ButtonClass() {
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    console.log("Button Clicked");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
      <div className="header">
        <Button
          type="primary"
          block
          loading={loading}
          onClick={handleChange}
          icon={<PoweroffOutlined />}
        >
          Primary-Button
        </Button>
        <Button type="dashed">Dashed-Button</Button>
        <Button type="link" href="https://www.google.com">
          Link-Button
        </Button>

        <Button type="text" className="myButton" onClick={handleChange}>
          Text-Button
        </Button>
      </div>
    </div>
  );
}

export default ButtonClass;
