import React from "react";
import "./App.scss";
import WebFooter from "./components/common/WebFooter";
import MainHeader from "./components/common/WebHeader";
import Home from "./views/Home";
const App = () => {
  return (
    <>
      <MainHeader />
      <Home />
      <WebFooter />
    </>
  );
};

export default App;
