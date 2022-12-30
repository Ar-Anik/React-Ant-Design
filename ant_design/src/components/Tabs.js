import {
  AmazonOutlined,
  AndroidOutlined,
  AppleOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Space, Tabs } from "antd";
import "antd/dist/reset.css";
import { useRef, useState } from "react";
import "../App.css";

function TabClass() {
  const tabNumber = useRef(3);
  const [tabList, setTabList] = useState([
    { tab: "Tab-1", key: "tab1" },
    { tab: "Tab-2", key: "tab2" },
  ]);

  const onEdit = (key, action) => {
    if (action === "add") {
      setTabList((previus) => {
        return [
          ...previus,
          { tab: `Tab-${tabNumber.current}`, key: `tab${tabNumber.current}` },
        ];
      });
      tabNumber.current += 1;
    } else if (action === "remove") {
      setTabList((previus) => {
        return [
          ...previus.filter((tab) => {
            return tab.key !== key;
          }),
        ];
      });
    }
  };
  return (
    <div className="custom">
      <Space size={32} direction="vertical">
        <Tabs defaultActiveKey="tab2">
          <Tabs.TabPane tab="Tab-1" key="tab1">
            <div>This is a content of Tab-1</div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Tab-2" key="tab2">
            <div>This is a content of Tab-2</div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Tab-3" key="tab3">
            <div>This is a content of Tab-3</div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Tab-4" key="tab4">
            <div>This is a content of Tab-4</div>
          </Tabs.TabPane>
        </Tabs>

        <Tabs tabPosition="left">
          <Tabs.TabPane tab="Tab-1" key="tab1">
            <div>This is a Content of Tab-1</div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Tab-2" key="tab2">
            <div>This is a Content of Tab-2</div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Tab-3" key="tab3">
            <div>This is a Content of Tab-3</div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Tab-4" key="tab4">
            <div>This is a Content of Tab-4</div>
          </Tabs.TabPane>
        </Tabs>

        <Tabs>
          <Tabs.TabPane
            tab={
              <span>
                <AppleOutlined /> Apple
              </span>
            }
            key="tab1"
          >
            <div>This is a Content of Apple</div>
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <span>
                <AndroidOutlined /> Android
              </span>
            }
            key="tab2"
          >
            <div>This is a Cotent of Android</div>
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <span>
                <AmazonOutlined /> Amazon
              </span>
            }
            key="tab3"
          >
            <div>This is a Content of Amazon</div>
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <span>
                <GithubOutlined /> Github
              </span>
            }
            key="tab4"
          >
            <div>This is a Content of Github</div>
          </Tabs.TabPane>
        </Tabs>

        <Tabs defaultActiveKey="tab2" type="editable-card" onEdit={onEdit}>
          {tabList.map((tabInfo, index) => {
            return (
              <Tabs.TabPane
                closable={index > 1}
                tab={tabInfo.tab}
                key={tabInfo.key}
              >
                <div>This is a Content of {tabInfo.tab}</div>
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </Space>
    </div>
  );
}

export default TabClass;
