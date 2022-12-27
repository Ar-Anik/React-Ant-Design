import { Col, Divider, Row } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function GridClass() {
  return (
    <>
      <div>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <div style={{ backgroundColor: "red" }}>Col-6</div>
          </Col>

          <Col span={6}>
            <div style={{ backgroundColor: "blue" }}>Col-6</div>
          </Col>

          <Col span={6}>
            <div style={{ backgroundColor: "yellow" }}>Col-6</div>
          </Col>

          <Col span={6}>
            <div style={{ backgroundColor: "green" }}>Col-6</div>
          </Col>
        </Row>
      </div>

      <div>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col span={6}>
            <div style={{ backgroundColor: "tomato" }}>Col-6</div>
          </Col>

          <Col span={6}>
            <div style={{ backgroundColor: "tomato" }}>Col-6</div>
          </Col>

          <Col span={6}>
            <div style={{ backgroundColor: "blue" }}>Col-6</div>
          </Col>

          <Col span={6}>
            <div style={{ backgroundColor: "red" }}>Col-6</div>
          </Col>
        </Row>
      </div>

      <Row gutter={[16, 24]}>
        <Col span={6}>
          <div style={{ backgroundColor: "blue" }}>Col-6</div>
        </Col>

        <Col span={6}>
          <div style={{ backgroundColor: "blue" }}>Col-6</div>
        </Col>

        <Col span={6}>
          <div style={{ backgroundColor: "blue" }}>Col-6</div>
        </Col>

        <Col span={6}>
          <div style={{ backgroundColor: "blue" }}>Col-6</div>
        </Col>

        <Col span={6}>
          <div style={{ backgroundColor: "blue" }}>Col-6</div>
        </Col>

        <Col span={6}>
          <div style={{ backgroundColor: "blue" }}>Col-6</div>
        </Col>

        <Col span={6}>
          <div style={{ backgroundColor: "blue" }}>Col-6</div>
        </Col>

        <Col span={6}>
          <div style={{ backgroundColor: "blue" }}>Col-6</div>
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "yellow" }} />

      <Row>
        <Col span={8} style={{ backgroundColor: "blue" }}>
          Col-8
        </Col>
        <Col span={8} offset={8} style={{ backgroundColor: "blue" }}>
          Col-8
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "red" }} />

      <Row>
        <Col span={6} offset={6} style={{ backgroundColor: "blue" }}>
          Col-6-offset-6
        </Col>
        <Col span={6} offset={6} style={{ backgroundColor: "blue" }}>
          Col-6-offset-6
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "green" }} />

      <Row>
        <Col span={12} offset={6} style={{ backgroundColor: "yellow" }}>
          col-12 col-offset-6
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "green" }} />

      <Row>
        <Col span={18} push={6} style={{ backgroundColor: "blue" }}>
          Col-18 col-push-6
        </Col>
        <Col span={6} pull={18} style={{ backgroundColor: "skyblue" }}>
          Col-6 col-pull-18
        </Col>
      </Row>

      <Row>
        <Col span={18} push={8} style={{ backgroundColor: "blue" }}>
          Col-18 col-push-6
        </Col>

        <Col span={6} pull={6} style={{ backgroundColor: "red" }}>
          Col-6 col-pull-8
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "blue" }} />

      <Row justify="start">
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "blue" }} />

      <Row justify="center">
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "blue" }} />

      <Row justify="end">
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "blue" }} />

      <Row justify="space-between">
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "blue" }} />

      <Row justify="space-around">
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "blue" }} />

      <Row justify="space-evenly">
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "blue" }}>
          Col-4
        </Col>
        <Col span={4} style={{ backgroundColor: "skyblue" }}>
          Col-4
        </Col>
      </Row>
    </>
  );
}

export default GridClass;
