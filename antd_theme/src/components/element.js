import "../App.less";
import { Button, DatePicker, Input, Slider, Progress, Space, Spin } from "antd";

function Element() {
  return (
    <div className="App">
      <div className="header">
        <Space direction="vertical">
          <Button type="primary">Button</Button>
          <Input placeholder="Type here..."></Input>
          <Progress percent={50} type="circle" />
          <Spin spinning />
          <DatePicker />
          <Slider />
        </Space>
      </div>
    </div>
  );
}

export default Element;
