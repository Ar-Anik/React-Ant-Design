import { CheckOutlined, SmileFilled } from "@ant-design/icons";
import { Typography } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";

const { Title, Text, Paragraph, Link } = Typography;

function TypographyClass() {
  const [text, setText] = useState("Aubdur Rob Anik");
  const [txt, setTxt] = useState("Aubdur Rob Anik");

  return (
    <div className="custom">
      <Title level={1}>Aubdur Rob Anik</Title>
      <Title level={2}>Aubdur Rob Anik</Title>
      <Title level={3}>Aubdur Rob Anik</Title>
      <Title level={4}>Aubdur Rob Anik</Title>
      <Title level={5}>Aubdur Rob Anik</Title>

      <Text>Bangladesh Country</Text>
      <Text strong>React JS Project</Text>
      <Text underline>React JS Project</Text>
      <Text mark>React JS Project</Text>
      <Text disabled>React JS Project</Text>
      <Text type="success">React JS Project</Text>
      <Link href="https://www.aranik43.blogspot">Aubdur Rob Anik</Link>

      <Text
        editable={{
          onChange: (value) => {
            setText(value);
          },
          triggerType: "icon|text",
          tooltip: "Click To Edit",
        }}
      >
        {text}
      </Text>

      <Paragraph strong>Aubdur Rob Anik</Paragraph>

      <Paragraph
        editable={{
          onChange: (value) => {
            setText(value);
          },
          triggerType: "icon|text",
          tooltip: "Click To Edit",
        }}
      >
        {text}
      </Paragraph>

      <Paragraph
        editable={{
          onChange: (value) => {
            setTxt(value);
          },
          triggerType: "icon|text",
          tooltip: "Clck to Edit",
          icon: <SmileFilled />,
          enterIcon: <CheckOutlined />,
        }}
      >
        {txt}
      </Paragraph>

      <Paragraph
        copyable={{
          tooltips: ["Click to Copy", "Done"],
          text: "Different Text Copied",
        }}
      >
        React-JS Married With Node-JS
      </Paragraph>

      <Paragraph
        ellipsis={{ rows: 2, expandable: true, symbol: "Show More" }}
        style={{ width: "100px" }}
      >
        Aubdur Rob Anik, Aubdur Rob Anik, Aubdur Rob Anik, Aubdur Rob Anik,
        Aubdur Rob Anik, Aubdur Rob Anik
      </Paragraph>

      <Paragraph
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: "Show More",
          prefix: "Aubdur Rob",
          suffix: "Anik",
        }}
        style={{ width: "100px" }}
      >
        Aubdur Rob Anik, Aubdur Rob Anik, Anik Rob Ank, Aubdur Rob Anik, Aubdur
        Rob Anik, Aubdur Rob Anik
      </Paragraph>
    </div>
  );
}

export default TypographyClass;
