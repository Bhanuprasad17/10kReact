import "./App.css";
import { Cards } from "./Components/Cards";
import { NoDataFound } from "./Components/NoDataFound";
import { Table } from "./Components/Table";

function App() {


  let isLoggin = true
  return (
    <>
      {isLoggin ? <>
        <div className="conditional">
        <Cards />
        <Table />
       </div>
      </> : <>
        <p>You have not loggdin</p>
      </>}
      
    </>
  );
}

export default App;
