import React from "react";
import Body from "./components/Body";
import Title from "./components/Title";



const BlogPost = () => {
    let newsData = {
        title: "Carta del Papa a Alberto Fernández: pide “procurar soluciones adecuadas a los problemas”",
        body: "Francisco se dirigió al presidente argentino con una misiva que divulgó la Casa Rosada. Remarca que las dificultas económicas “afligen, de manera particular, a los más débiles y descartados. La respuesta del mandatario",
    };
        return (
        <div >
            <Title title={newsData.title} />
            <Body body={newsData.body} />
        </div>
    );
};


export default BlogPost;