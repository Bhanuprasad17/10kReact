import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Table } from './Components/Table.jsx'

let root = createRoot(document.getElementById('root'))


let count = 0
function Counter(){
  function handleIncre(){
    count = count + 1
    root.render(<Counter />)
    console.log(count)
  }
  return <>
     <h1>Count : {count}</h1>
     <button onClick={handleIncre}>INC</button>
  </>
}

root.render(<Counter />)