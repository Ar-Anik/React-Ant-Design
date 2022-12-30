import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Space } from "antd";
import "antd/dist/reset.css";
import "../App.css";
import pic1 from "../style/pic1.jpg";

function AvatarClass() {
  return (
    <div className="custom">
      <Space direction="vertical" size={12}>
        <Avatar style={{ backgroundColor: "green", color: "white" }}>
          Anik
        </Avatar>

        <Avatar
          shape="square"
          style={{ backgroundColor: "black", color: "white" }}
        >
          A
        </Avatar>

        <Divider style={{ backgroundColor: "red" }} />
        <Avatar src={pic1} size={50} />
        <Divider style={{ backgroundColor: "red" }} />

        <Avatar icon={<UserOutlined />} />

        <Divider style={{ backgroundColor: "blue" }} />

        <Avatar.Group>
          <Avatar style={{ backgroundColor: "green", color: "white" }}>
            Anik
          </Avatar>

          <Avatar
            shape="square"
            style={{ backgroundColor: "black", color: "white" }}
          >
            A
          </Avatar>

          <Avatar src={pic1} />

          <Avatar icon={<UserOutlined />} />
        </Avatar.Group>

        <Divider style={{ backgroundColor: "tomato" }} />

        <Avatar.Group maxCount={2} maxPopoverTrigger="hover">
          <Avatar style={{ backgroundColor: "green", color: "white" }}>
            <span style={{ color: "greenyellow" }}>Anik</span>
          </Avatar>

          <Avatar
            shape="square"
            style={{ backgroundColor: "black", color: "white" }}
          >
            A
          </Avatar>

          <Avatar src={pic1} />

          <Avatar icon={<UserOutlined />} />
        </Avatar.Group>
      </Space>
    </div>
  );
}

export default AvatarClass;
