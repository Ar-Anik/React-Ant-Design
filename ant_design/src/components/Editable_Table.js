import { Button, Form, Input, Table } from "antd";
import "antd/dist/reset.css";
import { useEffect, useState } from "react";
import "../App.css";

function EditableTable() {
  const [dataSource, setDataSource] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const data = [];
    for (let i = 0; i < 8; i++) {
      data.push({
        key: `${i}`,
        name: `Name ${i}`,
        address: `Address ${i}`,
      });
      setDataSource(data);
    }
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        if (editRow === record.key) {
          return (
            <Form.Item name="name">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (text, record) => {
        if (editRow === record.key) {
          return (
            <Form.Item name="address">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEditRow(record.key);
                form.setFieldValue({
                  name: record.name,
                  address: record.address,
                });
              }}
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit">
              Save
            </Button>
          </>
        );
      },
    },
  ];

  const handleSubmit = (values) => {
    const updatedata = [...dataSource];
    updatedata.splice(editRow, 1, { ...values });
    setDataSource(updatedata);
    setEditRow(null);
  };

  return (
    <div className="custom">
      <Form form={form} onFinish={handleSubmit}>
        <Table columns={columns} dataSource={dataSource} />
      </Form>
    </div>
  );
}

export default EditableTable;
