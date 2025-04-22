import React from 'react'
import '../styles/table.css'
import {data} from '../data/studentData.js'
import { NoDataFound } from './NoDataFound.jsx'

export const Table = () => {

   return (
    <>
     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Batch</th>
        </tr>
      </thead>
      <tbody>
        {
          data.length > 0 ? (<> 
            {
              data.map(data =>{
                return <> 
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.batch}</td>
                  </tr>
                </>
              })
            }
          </>) :(<>
            <NoDataFound />
          </>)
        }
      </tbody>
     </table>
      
    </>
  )
}
// can't read the properties of null 