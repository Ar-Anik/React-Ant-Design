import { DatePicker, TimePicker } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function Picker() {
  return (
    <div className="App">
      <div className="header">
        <DatePicker picker="month" />
        <DatePicker picker="quarter" />
        <DatePicker picker="week" />

        <br />

        <DatePicker.RangePicker picker="month" />

        <br />

        <TimePicker />

        <br />

        <TimePicker.RangePicker />
      </div>
    </div>
  );
}

export default Picker;
