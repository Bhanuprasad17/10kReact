// import "./App.css";
import { Cards } from "./Components/Cards";
import { GrandParent } from "./Components/GrandParent";
import { NoDataFound } from "./Components/NoDataFound";
import { Table } from "./Components/Table";

function App() {

  const name = "Bhanuprasad"
  const age =23

  // let isLoggin = true
  // return (
  //   <>
  //     {isLoggin ? <>
  //       <div className="conditional">
  //       <Cards />
  //       <Table />
  //      </div>
  //     </> : <>
  //       <p>You have not loggdin</p>
  //     </>}
      
  //   </>
  // );

  return <>
    <GrandParent 
      name = {name}
      age = {age}
      location="Earth"
      occupation="Engineer"
      hobbies={["Reading", "Traveling"]}
    />
     
  </>

}

export default App;
