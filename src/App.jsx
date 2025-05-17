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

class App extends Component {
  render() {
    return (
      <>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/cricketers" element={<Cricketers />}/>
            <Route path="/viewMore/:id" element={<View_More />}/>
            <Route path="/login" element = {<Login />}/>
          </Routes>
        </BrowserRouter> */}
        {/* <NavBar /> */}

        {/* <UseMemo /> */}
        {/* <UseCallback /> */}
        <UseCallback2 />
      </>
    );
  }
}

export default App;
