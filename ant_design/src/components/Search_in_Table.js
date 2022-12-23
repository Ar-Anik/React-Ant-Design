import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Table } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function SearchTable() {
  const dataSource = [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      address: "john Address",
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
      address: "david Address",
    },
    {
      id: 3,
      name: "James",
      email: "james@gmail.com",
      address: "james Address",
    },
    {
      id: 4,
      name: "Sam",
      email: "sam@gmail.com",
      address: "sam Address",
    },
    {
      id: 5,
      name: "White Angel",
      email: "angel@gmail.com",
      address: "angel Address",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      //   filterDropdown: true,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Enter Text Here"
              value={selectedKeys[0]}
              onChange={(event) => {
                setSelectedKeys(event.target.value ? [event.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>

            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },

      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        // return record.name === value;
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Enter Text Here"
              value={selectedKeys[0]}
              onChange={(event) => {
                setSelectedKeys(event.target.value ? [event.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>

            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },

      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        // return record.name === value;
        return record.address.toLowerCase().includes(value.toLowerCase());
      },
    },
  ];

  return (
    <div className="custom">
      <Table
        style={{ display: "flex", flex: 1, margin: 10 }}
        dataSource={dataSource}
        columns={columns}
      ></Table>
    </div>
  );
}

export default SearchTable;
