import { Col, Divider, Row } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function GridClassTwo() {
  return (
    <>
      <Row>
        <Col span={6} order={4}>
          <div style={{ backgroundColor: "blue" }}>1 Col-Order-4</div>
        </Col>

        <Col span={6} order={3}>
          <div style={{ backgroundColor: "blue" }}>2 Col-Order-3</div>
        </Col>

        <Col span={6} order={2}>
          <div style={{ backgroundColor: "blue" }}>3 Col-Order-2</div>
        </Col>

        <Col span={6} order={1}>
          <div style={{ backgroundColor: "blue" }}>4 Col-Order-1</div>
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "yellow" }} />

      <Row>
        <Col
          span={6}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
          style={{ backgroundColor: "red" }}
        >
          1 col-order-responsive
        </Col>

        <Col
          span={6}
          xs={{ order: 2 }}
          sm={{ order: 1 }}
          md={{ order: 4 }}
          lg={{ order: 3 }}
          style={{ backgroundColor: "red" }}
        >
          2 Col-Order-Responsive
        </Col>

        <Col
          span={6}
          xs={{ order: 3 }}
          sm={{ order: 4 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
          style={{ backgroundColor: "red" }}
        >
          3 Col-Order-Responsive
        </Col>

        <Col
          span={6}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 1 }}
          lg={{ order: 2 }}
          style={{ backgroundColor: "red" }}
        >
          4 Col-Order-Responsive
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "yellow" }} />

      <Row>
        <Col flex={2} style={{ backgroundColor: "blue" }}>
          2/5
        </Col>
        <Col flex={3} style={{ backgroundColor: "skyblue" }}>
          3/5
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "red" }} />

      <Row>
        <Col flex="100px" style={{ backgroundColor: "blue" }}>
          100px
        </Col>
        <Col flex="auto" style={{ backgroundColor: "skyblue" }}>
          Fill Rest
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "blue" }} />

      <Row>
        <Col flex="1 1 200px" style={{ backgroundColor: "blue" }}>
          1 1 200px
        </Col>
        <Col flex="0 1 300px" style={{ backgroundColor: "skyblue" }}>
          0 1 300px
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "yellow" }} />

      <Row wrap={false}>
        <Col flex="none">
          <div style={{ padding: "0 16px", backgroundColor: "skyblue" }}>
            none
          </div>
        </Col>

        <Col flex="auto">
          <div style={{ padding: "0 16px", backgroundColor: "blue" }}>
            auto with no-wrap
          </div>
        </Col>
      </Row>
    </>
  );
}

export default GridClassTwo;
