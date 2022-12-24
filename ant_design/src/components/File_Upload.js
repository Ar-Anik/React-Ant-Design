import { Button, message, Spin, Upload } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function FileUpload() {
  return (
    <div className="upload">
      <Upload.Dragger
        multiple
        listType="picture-card"
        action={"http://localhost:3000/"}
        showUploadList={{ showRemoveIcon: true }}
        accept=".png,.jpeg,.doc"
        beforeUpload={(file) => {
          const isImage =
            file.type === "image/jpeg" || file.type === "image/png";

          if (!isImage) {
            message.error("You can only upload JPG/PNG file!");
            return null;
          }

          return isImage;
          // console.log({ file });
          // return false;
        }}
        defaultFileList={[
          {
            uid: "abc",
            name: "existing_File.png",
            status: "uploading",
            percent: 50,
            url: "https://www.google.com/",
          },
        ]}
        iconRender={() => {
          return <Spin></Spin>;
        }}
        // itemRender={(existingComp, file) => {
        //   return <p>{file.name}</p>;
        // }}

        progress={{
          strokeWidth: 3,
          strokeColor: {
            "0%": "#f0f",
            "100%": "#ff0",
          },
          style: { top: 12 },
        }}
      >
        Drag Files Here Or
        <br />
        <Button>Click Upload</Button>
      </Upload.Dragger>
    </div>
  );
}

export default FileUpload;
