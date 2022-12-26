import { Divider } from "antd";
import "antd/dist/reset.css";
import "../App.css";

function DividerClass() {
  return (
    <div>
      <p>
        Excepteur ullamco dolore aliqua voluptate tempor.Consectetur tempor
        dolore irure cupidatat culpa nulla sit amet ut. Exercitation mollit est
        et eu consectetur enim aliqua elit aliqua commodo magna pariatur.
        Cupidatat sit quis culpa excepteur ipsum dolor qui. Ullamco proident
        quis mollit est officia duis tempor.
      </p>

      <Divider style={{ borderColor: "red" }} />

      <p>
        Voluptate commodo dolor mollit sunt nisi ut mollit. Quis ipsum qui
        aliquip dolore ullamco qui quis labore sunt fugiat laborum amet
        voluptate. Adipisicing aliquip sit ad incididunt. Amet fugiat sint ipsum
        duis id ullamco dolore ad aliqua. Laboris occaecat et ea veniam ullamco.
        Aliquip voluptate ad pariatur Lorem ex officia Lorem eu.
      </p>

      <Divider dashed style={{ borderColor: "blue" }} />

      <p>
        Lorem voluptate ipsum labore duis eiusmod ad ea veniam. Minim sunt
        reprehenderit nulla do irure aliquip. Et proident ea dolor anim enim
        pariatur do. Aute duis reprehenderit non occaecat magna tempor enim.
        Ullamco minim eu mollit amet.
      </p>

      <Divider style={{ borderColor: "yellow" }}>Text</Divider>

      <p>
        Est mollit et quis nostrud. Exercitation minim tempor exercitation dolor
        labore eu minim deserunt. Voluptate qui fugiat id fugiat proident do
        dolore exercitation minim irure et.
      </p>

      <Divider style={{ borderColor: "orange" }} orientation="left">
        Text
      </Divider>

      <p>
        Mollit elit consectetur in ad. Ullamco magna cillum do id occaecat ipsum
        proident qui amet officia. Deserunt magna aliqua voluptate voluptate
        cupidatat.
      </p>

      <Divider style={{ borderColor: "green" }} orientation="right">
        Text
      </Divider>

      <p>
        Enim non aliquip labore voluptate laborum consectetur. Incididunt velit
        deserunt cupidatat sunt. In sit magna eu voluptate consectetur
        consequat. Dolor nostrud enim aliquip et laboris cillum voluptate ea.
      </p>

      <Divider
        style={{ borderColor: "tomato" }}
        orientation="right"
        orientationMargin={3}
      >
        Text
      </Divider>

      <p>
        Excepteur ullamco dolore aliqua voluptate tempor.Consectetur tempor
        dolore irure cupidatat culpa nulla sit amet ut. Exercitation mollit est
        et eu consectetur enim aliqua elit aliqua commodo magna pariatur.
        Cupidatat sit quis culpa excepteur ipsum dolor qui. Ullamco proident
        quis mollit est officia duis tempor.
      </p>

      <Divider
        style={{ borderColor: "tomato" }}
        orientation="right"
        orientationMargin={150}
      >
        Text
      </Divider>

      <p>
        Excepteur ullamco dolore aliqua voluptate tempor.Consectetur tempor
        dolore irure cupidatat culpa nulla sit amet ut. Exercitation mollit est
        et eu consectetur enim aliqua elit aliqua commodo magna pariatur.
        Cupidatat sit quis culpa excepteur ipsum dolor qui. Ullamco proident
        quis mollit est officia duis tempor.
      </p>

      <Divider style={{ borderColor: "yellowgreen" }} />

      <div className="App">
        <span>Link</span>
        <Divider style={{ borderColor: "red" }} type="vertical"></Divider>
        <span>Link</span>
        <Divider style={{ borderColor: "green" }} type="vertical"></Divider>
        <span>Link</span>
      </div>
    </div>
  );
}

export default DividerClass;
