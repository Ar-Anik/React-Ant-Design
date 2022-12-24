import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

function TablePagination() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLaoding] = useState(false);
  const [totalPage, setTotalPage] = useState(10);

  //   const fetchRecords = (page) => {
  //     fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setLaoding(true);
  //         setDataSource(data.data);
  //         setTotalPage(data.totalPages);
  //         console.log(data.totalPages);
  //         setLaoding(false);
  //         //   console.log(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setLaoding(false);
  //       });
  //   };

  const fetchAxios = async (page, pageSize) => {
    setLaoding(true);
    const result = await axios.get(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${pageSize}`
    );
    const data = result.data;

    setDataSource(data.data);
    setTotalPage(data.totalPages);
    setLaoding(false);
  };

  useEffect(() => {
    // fetchRecords();
    fetchAxios(1, 10);
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Trips",
      dataIndex: "trips",
    },
  ];
  return (
    <div className="custom">
      <Table
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        pagination={{
          //   pageSize: 10,
          total: totalPage,

          onChange: (page, pageSize) => {
            console.log(pageSize);
            fetchAxios(page, pageSize);
          },
        }}
      ></Table>
    </div>
  );
}

export default TablePagination;
