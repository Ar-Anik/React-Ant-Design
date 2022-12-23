import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Table } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";
function CRUD() {
  const [edit, setEdit] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
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
  ]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Actions",
      render: (value) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(value);
                setEditStudent({ ...value });
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(value);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onDeleteStudent = (value) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((previus) => {
          return previus.filter((student) => student.id !== value.id);
        });
      },
    });
  };

  const addStudent = () => {
    const randomNumber = parseInt(Math.random() * 200);
    const newStudent = {
      id: randomNumber,
      name: randomNumber + " name",
      email: randomNumber + "@gmail.com",
      address: randomNumber + " Address",
    };

    setDataSource((previus) => {
      return [...previus, newStudent];
    });
  };

  const onEditStudent = (value) => {
    setEdit(true);
  };

  const resetEditing = () => {
    setEdit(false);
    setEditStudent(null);
  };

  return (
    <div className="custom">
      <Button onClick={addStudent}>Add New Student</Button>
      <Table dataSource={dataSource} columns={columns}></Table>
      <Modal
        title="Edit Student"
        visible={edit}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((previus) => {
            return previus.map((student) => {
              if (student.id === editStudent.id) {
                return editStudent;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editStudent?.name}
          onChange={(event) => {
            setEditStudent((previus) => {
              return { ...previus, name: event.target.value };
            });
          }}
        />
        <Input
          value={editStudent?.email}
          onChange={(event) => {
            setEditStudent((previus) => {
              return { ...previus, email: event.target.value };
            });
          }}
        />
        <Input
          value={editStudent?.address}
          onChange={(event) => {
            setEditStudent((previus) => {
              return { ...previus, address: event.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
}

export default CRUD;
