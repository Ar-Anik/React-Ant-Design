import {
  AppleFilled,
  BankTwoTone,
  HeartOutlined,
  LoadingOutlined,
  LoginOutlined,
  PieChartFilled,
} from "@ant-design/icons";
import { Button, Divider } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function Icon() {
  //   const HeartIcon = (props) => {
  //     return (
  //       <Icon
  //         component={() => {
  //           <svg
  //             // xmlns="http://www.w3.org/2000/svg"
  //             width="16"
  //             height="16"
  //             fill="currentColor"
  //             class="bi bi-heart-fill"
  //             viewBox="0 0 16 16"
  //           >
  //             <path
  //               fill-rule="evenodd"
  //               d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
  //             />
  //           </svg>;
  //         }}
  //         {...props}
  //       />
  //     );
  //   };

  return (
    <div className="custom">
      <PieChartFilled style={{ color: "purple", fontSize: 100 }} />
      <AppleFilled style={{ color: "green", fontSize: 100 }} />
      <LoadingOutlined spin style={{ color: "green", fontSize: 100 }} />
      <PieChartFilled rotate={45} style={{ color: "yellow", fontSize: 100 }} />
      <BankTwoTone twoToneColor="green" style={{ fontSize: 100 }} />
      <Divider />

      {/* <HeartIcon style={{ color: "orange", fontSize: 100 }} /> */}

      <Button icon={<LoginOutlined style={{ color: "red", fontSize: 14 }} />}>
        Antd Custom Button
      </Button>

      <Divider />

      <p>
        I <HeartOutlined style={{ color: "red", fill: "red", fontSize: 15 }} />{" "}
        you
      </p>
    </div>
  );
}

export default Icon;
