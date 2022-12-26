import { Pagination, Space } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";

function PaginationClass() {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="custom">
      <Space direction="vertical" size={8}>
        <Pagination total={20} pageSize={5} />
        <Pagination defaultCurrent={2} total={20} pageSize={5} />
        <Pagination total={200} pageSize={5} />
        <Pagination total={20} showSizeChanger />
        <Pagination
          total={2000}
          showSizeChanger
          pageSizeOptions={[1, 2, 10, 20, 50, 100, 200]}
        />
        <Pagination total={200} showQuickJumper showSizeChanger={false} />
        <Pagination
          total={60}
          showQuickJumper
          showSizeChanger={false}
          itemRender={(page, type) => {
            if (type === "next") {
              return <a href="#">NEXT</a>;
            } else if (type === "prev") {
              return <a href="#">PREVIUS</a>;
            }

            if (type === "page") {
              return <a href="#">Page#{page}</a>;
            }
          }}
          onChange={(page) => {
            setPageNumber(page);
          }}
        />
        <div style={{ color: "red" }}>
          Showing Content of Page #CurrentPage{pageNumber}
        </div>
      </Space>
    </div>
  );
}

export default PaginationClass;
