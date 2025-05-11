import React ,{Component}from "react";
import Register from "./Components/functionComponents/Register";
import Login from "./Components/functionComponents/Login";
import NewRegister from "./Components/functionComponents/NewRegister";
import NewLogin from "./Components/functionComponents/NewLogin";

class App extends Component{
  render(){
    return <>
     {/* <Register /> */}
     {/* <Login /> */}
     {/* <NewRegister /> */}
     <NewLogin />
    </>
  }
}

export default App
