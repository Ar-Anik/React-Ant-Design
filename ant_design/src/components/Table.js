import "antd/dist/reset.css";
import "../App.css";
import { Table } from "antd";

function TableClass() {
  const data = [
    {
      name: "aaaaa",
      age: 10,
      address: "aaaaab",
      key: "1",
    },
    {
      name: "bbbbb",
      age: 20,
      address: "bbbbbc",
      key: "2",
    },
    {
      name: "ccccc",
      age: 20,
      address: "cccccd",
      key: "3",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
    },
  ];

  return (
    <div className="App">
      <div className="header">
        <Table dataSource={data} columns={columns}></Table>
      </div>
    </div>
  );
}

export default TableClass;
