import React from "react";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { Header } from "./components";
import AppProvider from "./context/AppContext";

const renderer = createRenderer();

renderer.renderStatic(`
  @import url("https://fonts.googleapis.com/css?family=Josefin+Sans:400,700");
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    font-family: 'Josefin Sans';
    background-color: #6c8ead;
  }
`);

function App() {
  localStorage.clear();
  return (
    <RendererProvider renderer={renderer}>
      <Router>
        <AppProvider>
          <Header />
          <Routes />
        </AppProvider>
      </Router>
    </RendererProvider>
  );
}

export default App;
