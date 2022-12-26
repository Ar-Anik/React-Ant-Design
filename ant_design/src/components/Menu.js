import {
  DashboardOutlined,
  DollarCircleOutlined,
  EditOutlined,
  HomeFilled,
  MoneyCollectOutlined,
  SwitcherOutlined,
} from "@ant-design/icons";
import { Input, Menu, Space } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function MenuClass() {
  return (
    <div className="custom">
      <Space>
        <Menu
          mode="inline"
          onClick={(info) => {
            console.log(info.key);
          }}
          defaultOpenKeys={["dashboard"]}
          items={[
            {
              label: <Input.Search placeholder="Search Here.."></Input.Search>,
              key: "search",
            },
            { label: "Home", key: "home", icon: <HomeFilled /> },
            {
              label: "Dashboard",
              key: "dashboard",
              icon: <DashboardOutlined />,
              children: [
                {
                  label: "Revenue",
                  key: "rev",
                  icon: <DollarCircleOutlined />,
                },
                {
                  label: <span style={{ color: "#f00" }}>"Expenses"</span>,
                  key: "exp",
                  icon: <MoneyCollectOutlined />,
                },
              ],
            },
            {
              label: "User Management",
              key: "usrm",
              type: "group",
              children: [
                { label: "Edit Profile", key: "ep", icon: <EditOutlined /> },
                {
                  label: "Switch Account",
                  key: "sac",
                  icon: <SwitcherOutlined />,
                },
              ],
            },
            { label: "Signout", key: "signout", danger: true },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}

export default MenuClass;
