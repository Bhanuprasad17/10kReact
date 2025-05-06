import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Table } from './Components/Table.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
