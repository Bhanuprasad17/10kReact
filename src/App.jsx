import React ,{Component}from "react";
import PrintData from "./Components/classComponets/PrintData";
import PrintData2 from "./Components/classComponets/PrintData2";
import FetchProducts from "./Components/classComponets/FetchProducts";
import FetchProduct2 from "./Components/classComponets/FetchProducts2";
import FetchProducts3 from "./Components/classComponets/FetchProducts3";

class App extends Component{
  render(){
    return <>
     {/* <PrintData /> */}
     {/* <PrintData2 /> */}
     {/* <FetchProducts /> */}
     {/* <FetchProduct2 /> */}
     <FetchProducts3 />
    </>
  }
}

export default App
