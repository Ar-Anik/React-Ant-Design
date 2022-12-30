import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import "antd/dist/reset.css";
import "../App.css";
import pic1 from "../style/pic1.jpg";

function CardClass() {
  return (
    <div className="custom">
      <Card
        style={{ width: 320 }}
        actions={[
          <FacebookFilled style={{ color: "blue" }} />,
          <TwitterOutlined style={{ color: "skyblue" }} />,
          <InstagramOutlined style={{ color: "purple" }} />,
          <YoutubeOutlined style={{ color: "red" }} />,
          <p style={{ fontSize: "10px" }}>2500 Stars</p>,
        ]}
        title="Need More Information"
        extra={<Button type="primary">Details</Button>}
        cover={
          <div
            style={{
              height: 150,
              width: "300px",
              background: "linear-gradient(#FF007A, #4200FF)",
              color: "white",
              fontSize: 20,
              paddingTop: 20,
              textAlign: "center",
              fontFamily: "cursive",
            }}
          >
            Welcome Antd Design
          </div>
        }
      >
        <Card.Meta
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: -60,
          }}
          avatar={<Avatar src={pic1} size={70}></Avatar>}
          title={"Aubdur Rob Anik"}
          description="@aranik"
        ></Card.Meta>
        <p
          style={{
            // textAlign: "center",
            fontFamily: "cursive",
            marginTop: "5px",
            fontWeight: "bolder",
            // marginLeft: "2px",
            // color: "blue",
          }}
        >
          <ul style={{ listStyleType: "square" }}>
            <li>React</li>
            <li>Django</li>
            <li>SqlAlchemy</li>
          </ul>
        </p>
      </Card>
    </div>
  );
}

export default CardClass;
