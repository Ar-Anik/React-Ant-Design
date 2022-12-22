import { Progress } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function ProgressBar() {
  return (
    <div className="App">
      <div className="header1">
        <Progress percent={33} />
        <Progress percent={33} type="circle" />
        <Progress percent={33} type="line" strokeColor="green" />
        <Progress
          percent={60}
          type="line"
          strokeColor="orange"
          strokeWidth="50px"
          status="active"
        />

        <Progress
          percent={60}
          type="circle"
          strokeColor="red"
          status="success"
        />

        <Progress
          percent={45}
          type="circle"
          strokeColor="blue"
          status="exception"
        />

        <Progress percent={50} strokeColor="tomato" steps={4} />
      </div>
    </div>
  );
}

export default ProgressBar;
