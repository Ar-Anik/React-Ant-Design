import { Select } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function SelectClass() {
  const fruits = ["Banana", "Mango", "Orange", "Cherry"];

  return (
    <div className="App">
      <div className="header">
        <h2>Which Language are you known?</h2>
        <Select
          mode="multiple"
          maxTagCount={2}
          placeholder="Enter Language"
          allowClear
          style={{ width: "30%" }}
        >
          <Select.Option value="C++">C++</Select.Option>
          <Select.Option value="Python">Python</Select.Option>
          <Select.Option value="Javascript">Javascript</Select.Option>
          <Select.Option value="React">React</Select.Option>
          <Select.Option value="GO">GO</Select.Option>
        </Select>

        <br />
        <br />

        <h2>Which is your Favourite Fruit</h2>
        <Select
          mode="multiple"
          maxTagCount={2}
          placeholder="Select Fruit"
          allowClear
          style={{ width: "30%" }}
        >
          {fruits.map((fruit, index) => {
            return (
              <Select.Option key={index} value={fruit}>
                {fruit}
              </Select.Option>
            );
          })}
        </Select>
      </div>
    </div>
  );
}

export default SelectClass;
