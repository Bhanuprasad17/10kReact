// import "./App.css";
import { Cards } from "./Components/Cards";
import { GrandParent } from "./Components/GrandParent";
import { NoDataFound } from "./Components/NoDataFound";
import Staff from "./Components/Staff/Staff";
import Students from "./Components/Students/Students";
import { Table } from "./Components/Table";
import Subjects from './Components/Subjects/Subjects'

function App() {

  const name = "Bhanuprasad"
  const age =23

  return <>
     
     <Students />
     <Staff />
     <Subjects />
     
  </>

}

export default App;
