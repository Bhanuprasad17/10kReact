import React, { Component } from "react";
import NavBar from "./Components/functionComponents/routerDom/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/functionComponents/routerDom/Home";
import Cricketers from "./Components/functionComponents/routerDom/Cricketers";
import View_More from "./Components/functionComponents/routerDom/View_More";
import Login from "./Components/functionComponents/routerDom/Login";
import UseMemo from "./Components/functionComponents/useMemo/useMemo";
import UseCallback from "./Components/functionComponents/useCallback/UseCallback";
import UseCallback2 from "./Components/functionComponents/useCallback/UseCallback2";
import UseRef from "./Components/functionComponents/useRef/UseRef";
import UndoDelete from "./Components/functionComponents/UndoDelete";
import UseRef2 from "./Components/functionComponents/useRef/UseRef2";

class App extends Component {
  render() {
    return (
      <>
        <UseRef2 />
      </>
    );
  }
}

export default App;
