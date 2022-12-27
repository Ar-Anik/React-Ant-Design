import {
  Button,
  Checkbox,
  ConfigProvider,
  Input,
  Radio,
  Select,
  Space,
  Switch,
  Table,
  theme,
} from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";

function Extra() {
  const { token } = theme.useToken();
  return (
    <h1 style={{ color: token.colorPrimary }}>
      This is Extra like Ex Girl Friend.
    </h1>
  );
}

function DynamicTheme() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const lightTheme = {
    colorPrimary: "green",
    colorTextBase: "green",
    colorTextLightSolid: "white",
  };

  const darkTheme = {
    colorPrimary: "black",
    colorTextBase: "black",
    colorTextLightSolid: "green",
  };
  return (
    <div className="custom">
      <ConfigProvider
        theme={{
          token: currentTheme === "light" ? lightTheme : darkTheme,
          components: {
            Checkbox: {
              colorPrimary: "skyblue",
            },
          },
        }}
      >
        <Space direction="vertical" size={12}>
          <Radio.Group
            value={currentTheme}
            onChange={(event) => {
              setCurrentTheme(event.target.value);
            }}
          >
            <Radio value={"light"}>Light</Radio>
            <Radio value={"dark"}>Dark</Radio>
          </Radio.Group>

          <Button type="primary">Theme Button</Button>
          <Checkbox>Checkbox</Checkbox>
          <Checkbox>CheckBox**</Checkbox>
          <Radio>Radio</Radio>

          <Switch checkedChildren="On" unCheckedChildren="Off" />

          <ConfigProvider
            theme={{ inherit: false, token: { colorPrimary: "purple" } }}
          >
            <Radio>Radio-2 without theme</Radio>
          </ConfigProvider>
          <Input placeholder="Enter Something..." />
          <Select
            placeholder="Select"
            options={[
              {
                label: "Option1",
                value: "Value1",
              },
              {
                label: "Option2",
                value: "Value2",
              },
            ]}
          />

          <Table
            columns={[
              {
                title: "Column",
                dataIndex: "clmn",
              },
            ]}
            dataSource={[{ clmn: "value-1" }]}
          ></Table>

          <Extra />
        </Space>
      </ConfigProvider>
    </div>
  );
}

export default DynamicTheme;
