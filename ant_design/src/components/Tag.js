import { DeleteOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import { Button, Divider, Space, Tag } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function TagClass() {
  const tags = ["code", "anik", "antd", "react", "Doggy"];

  return (
    <div className="custom">
      <Space direction="vertical">
        <Tag>Tag-1</Tag>
        <Tag>Tag-2</Tag>
        <Tag closable onClose={(event) => console.log(event)} color="warning">
          Tag-3
        </Tag>

        <Divider />

        <Tag
          closable
          color="error"
          closeIcon={
            <Button danger type="text">
              X
            </Button>
          }
        >
          Error
        </Tag>

        <Divider />

        <Tag closable color="error" closeIcon={<DeleteOutlined />}>
          Custom Remove Icon
        </Tag>

        <Divider />

        <Tag closable color="#f0f" closeIcon={<DeleteOutlined />}>
          Custom Remove Icon
        </Tag>

        <Divider />

        <Tag
          closable
          style={{
            backgroundColor: "red",
            color: "yellow",
            borderColor: "blue",
            borderRadius: 10,
          }}
          closeIcon={
            <DeleteOutlined style={{ color: "white", fontSize: 15 }} />
          }
        >
          Custom Tag
        </Tag>

        <Divider />

        <Tag
          closable
          style={{
            backgroundColor: "red",
            color: "yellow",
            borderColor: "blue",
            borderRadius: 10,
          }}
          closeIcon={
            <DeleteOutlined style={{ color: "white", fontSize: 15 }} />
          }
        >
          <Button>Click Button</Button>
        </Tag>

        <Divider />

        <Tag
          closable
          style={{
            backgroundColor: "red",
            color: "yellow",
            borderColor: "blue",
            borderRadius: 10,
          }}
          closeIcon={
            <DeleteOutlined style={{ color: "white", fontSize: 15 }} />
          }
          icon={<Loading3QuartersOutlined spin />}
        >
          Loading...
        </Tag>

        <Divider />

        <Space direction="horizontal" size={5}>
          {tags.map((tag) => {
            return (
              <Tag color="green" closable>
                {tag}
              </Tag>
            );
          })}
        </Space>
      </Space>
    </div>
  );
}

export default TagClass;
