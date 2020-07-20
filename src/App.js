import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRouter from "./utils/MainRouter";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
