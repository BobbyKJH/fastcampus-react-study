import React, { FC, ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";
import Div from "./components/Div";
import Span from "./components/Span";

function App() {
  return (
    <div>
      <Div name1="name1">
        <Span name1="name1" name2="name2" />
        <Span name1="name1" name2="name2" />
        <Span name1="name1" name2="name2" />
      </Div>
    </div>
  );
}

export default App;
