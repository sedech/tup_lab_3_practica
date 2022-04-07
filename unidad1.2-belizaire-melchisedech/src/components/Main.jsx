import React from "react";
import Body from "./Body";

const Main = ({ body }) => {
  return (
    <div>
      <Body body={body} />
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/sedech/tup_lab_3_practica"
              target="_blank"
            >
              Practica Lab III
            </a>{" "}
            <br /> <br />
            <a href="https://es.reactjs.org/" target="_blank">
              Bibioteca de React
            </a>
          </li>
        </ul>
      </nav>
      <br />
      <h3>My first proyect of React</h3>
    </div>
  );
};

export default Main;
