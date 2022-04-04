import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementacion de árbol de componentes y propiedades en React.",
  };
  return (
    <Page>
      <Header title={site.pageTitle} />
      <Main body={site.pageBody} />
    </Page>
  );
}

export default App;
