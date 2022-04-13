import React from "react";
import BlogPost from "../BlogPost";

import Body from "./Body";

const Main = ({ body, react, practica }) => {
  return (
    <div>
      <Body body={body.toUpperCase()} estilo="italic" />
      <BlogPost />
      <nav>
        <ul>
          <li>
            <a href={practica} target="blank">
              Practica Lab III
            </a>
          </li>
          <li>
          <a href={react} target="blank">
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
