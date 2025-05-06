import React ,{Component}from "react";
import PrintData from "./Components/classComponets/PrintData";
import PrintData2 from "./Components/classComponets/PrintData2";
import FetchProducts from "./Components/classComponets/FetchProducts";
import FetchProduct2 from "./Components/classComponets/FetchProducts2";
import FetchProducts3 from "./Components/classComponets/FetchProducts3";
import CycleExample from "./Components/classComponets/CycleExample";
import RideBooking from "./Components/classComponets/RideBooking";
import TypedValue from "./Components/functionComponents/TypedValue";
import Counter from "./Components/functionComponents/Counter";
import BatchUpdate from "./Components/functionComponents/BatchUpdate";
import DarkModeToggle from "./Components/functionComponents/DarkModeToggle";
import TodoList from "./Components/functionComponents/TodoList";

class App extends Component{
  render(){
    return <>
     {/* <PrintData /> */}
     {/* <PrintData2 /> */}
     {/* <FetchProducts /> */}
     {/* <FetchProduct2 /> */}
     {/* <FetchProducts3 /> */}
     {/* <CycleExample /> */}
     {/* <RideBooking /> */}
     {/* <TypedValue /> */}
     {/* <Counter /> */}
     {/* <BatchUpdate /> */}
     {/* <DarkModeToggle /> */}
     <TodoList />
    </>
  }
}

export default App
