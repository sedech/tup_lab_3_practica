import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementacion de árbol de componentes y propiedades en React.",
    practica: "https://github.com/sedech/tup_lab_3_practic",
    react: "https://es.reactjs.org/",
  };
  return (
    <Page>
      <Header title={site.pageTitle} />
      <Main 
      body={site.pageBody}
      practica={site.practica} 
      react={site.react}
      />
    </Page>
  );
}

export default App;
