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
      age: 30,
      address: "cccccd",
      key: "3",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
      render: (name) => {
        return <a>{name}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
    },
    {
      title: "Graduated",
      key: "key",
      render: (attribute) => {
        return <p>{attribute.age > 20 ? "True" : "False"}</p>;
      },
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
