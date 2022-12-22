import { Table, Tag } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import "../App.css";

function TableSRCS() {
  const [selectRows, setSelectRows] = useState([]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      render: (value) => {
        const color = value.includes("A+")
          ? "Green"
          : value.includes("A")
          ? "Blue"
          : "Orange";
        return <Tag color={color}>{value}</Tag>;
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "stduent-1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "stduent-2",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "stduent-3",
      grade: "B",
    },
    {
      key: "4",
      id: 4,
      name: "stduent-4",
      grade: "C",
    },
    {
      key: "5",
      id: 5,
      name: "stduent-5",
      grade: "A",
    },
    {
      key: "6",
      id: 6,
      name: "stduent-6",
      grade: "A-",
    },
    {
      key: "7",
      id: 7,
      name: "stduent-7",
      grade: "B+",
    },
    {
      key: "8",
      id: 8,
      name: "stduent-8",
      grade: "B-",
    },
  ];

  return (
    <div className="custom">
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={{
          //   type: "radio",
          type: "checkbox",
          selectedRowKeys: selectRows,
          onChange: (keys) => {
            setSelectRows(keys);
          },
          onSelect: (value) => {
            console.log(value);
          },

          //   getCheckboxProps: (value) => ({
          //     disabled: value.grade === "C",
          //   }),
          //   hideSelectAll: true,
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_NONE,
            Table.SELECTION_INVERT,

            {
              key: "even",
              text: "Select Even Rows",
              onSelect: (keys) => {
                const selectKey = keys.filter((key) => {
                  return key % 2 === 0;
                });
                setSelectRows(selectKey);
              },
            },

            {
              key: "odd",
              text: "Select Odd Rows",
              onSelect: (keys) => {
                const selectKey = keys.filter((key) => {
                  return key % 2 === 1;
                });
                setSelectRows(selectKey);
              },
            },

            {
              key: "Good",
              text: "Select Students With Good Grads",
              onSelect: (keys) => {
                const selectKey = keys.filter((key) => {
                  const goodStudent = dataSource.find((student) => {
                    return student.key === key && student.grade.includes("A");
                  });
                  return goodStudent;
                });
                setSelectRows(selectKey);
              },
            },
          ],
        }}
      ></Table>
    </div>
  );
}

export default TableSRCS;
