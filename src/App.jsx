import React ,{Component}from "react";
import Card from "./Components/classComponets/Card";
import Students from "./Components/classComponets/Students";
import Counter from "./Components/classComponets/Counter";
import Parent from "./Components/classComponets/Parent";

class App extends Component{
  render(){
    // return <Card />
    // return <Students />
    return <>
       {/* <Counter /> */}
       <Parent />
    </>
  }
}

export default App
