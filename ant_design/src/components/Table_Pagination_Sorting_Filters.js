import { Table } from "antd";
import "antd/dist/reset.css";
import { useEffect, useState } from "react";
import "../App.css";

function TablePSF() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
      sorter: (a, b) => a.userId > b.userId,
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In Progress"}</p>;
      },

      filters: [
        { text: "Complete", value: true },
        { text: "In Progress", value: false },
      ],

      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  return (
    <div className="custom">
      <Table
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        // pagination={false}
        pagination={{
          current: page,
          pageSize: pageSize,
          total: 500,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      ></Table>
    </div>
  );
}

export default TablePSF;
