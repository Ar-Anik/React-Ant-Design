import { Divider, Steps } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";
const { Step } = Steps;

function StepClass() {
  const [currentStep, setCurrentStep] = useState(0);
  const [current, SetCurrent] = useState(0);
  const [crnt, setCrnt] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <Steps current={1}>
        <Step title="Start"></Step>
        <Step title="In Progress"></Step>
        <Step title="Finish"></Step>
      </Steps>

      <Divider />

      <Steps
        current={currentStep}
        labelPlacement="vertical"
        onChange={(number) => {
          setCurrentStep(number);
        }}
      >
        <Step title="Start"></Step>
        <Step title="In Progress"></Step>
        <Step title="Finish"></Step>
      </Steps>

      <Divider />

      <Steps current={1} progressDot={true}>
        <Step title="Finished"></Step>
        <Step title="In Progress"></Step>
        <Step title="Waiting"></Step>
      </Steps>

      <Divider />

      <Steps
        current={current}
        percent={current === 0 ? 33.33 : current === 1 ? 66.66 : 100}
        onChange={(number) => {
          SetCurrent(number);
        }}
        labelPlacement="vertical"
      >
        <Step title="Start"></Step>
        <Step title="In Progress" subTitle="Wait For While"></Step>
        <Step
          title="Finished"
          description="It will initiate after step-2"
        ></Step>
      </Steps>

      <p className="App">You are Currently Step {current}</p>
      <Divider />

      <Steps
        current={crnt}
        direction="vertical"
        onChange={(number) => {
          setCrnt(number);
        }}
      >
        <Step title="Finished"></Step>
        <Step title="In Progress"></Step>
        <Step title="Waiting"></Step>
      </Steps>

      <Divider />

      <Steps current={1}>
        <Step title="Start" status="error"></Step>
        <Step title="In Progress"></Step>
        <Step title="Finish"></Step>
      </Steps>

      <Divider />

      <Steps current={1} status="error">
        <Step title="Finished"></Step>
        <Step title="In Progress"></Step>
        <Step title="Waiting"></Step>
      </Steps>
    </div>
  );
}

export default StepClass;
