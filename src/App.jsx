import React, { Component } from "react";
import Register from "./Components/functionComponents/Register";
import Login from "./Components/functionComponents/Login";
import NewRegister from "./Components/functionComponents/NewRegister";
import NewLogin from "./Components/functionComponents/NewLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/functionComponents/Home";
import SearchTheUser from "./Components/functionComponents/SearchTheUser";
import SearchTheUser2 from "./Components/functionComponents/SearchTheUser2";
import SearchTheUser3 from "./Components/functionComponents/SearchTheUser3";

class App extends Component {
  render() {
    return (
      <>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<NewLogin />} />
          </Routes>
        </BrowserRouter> */}

        {/* <Register /> */}
        {/* <Login /> */}
        {/* <NewRegister /> */}
        {/* <SearchTheUser /> */}
        {/* <SearchTheUser2 /> */}
        <SearchTheUser3 />
      </>
    );
  }
}

export default App;
