import { Button, Spin } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";

function SpinClass() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <div className="header">
        {/* <Spin></Spin> */}
        <Spin spinning={loading}></Spin>
        <Button
          onClick={() => {
            setLoading((previus) => !previus);
          }}
        >
          Spining Toogle
        </Button>

        <br />

        <Spin spinning={loading}>
          <h1>H1 Tag 1</h1>
          <h1>H1 tag 2</h1>
          <h1>H1 tag 3</h1>
        </Spin>
      </div>
    </div>
  );
}

export default SpinClass;
