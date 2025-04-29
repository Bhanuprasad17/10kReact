import { Component } from "react";



class Card extends Component{
  data = [
    {
      name : 'bhanu',
      age : 24,
      batch : '30r'
    },
    {
      name : 'mahesh',
      age : 23,
      batch : '30r'
    },
    {
      name : 'abhilash',
      age : 25,
      batch : '27r'
    }
  ]


  render(){
    console.log(this.data)
    return <>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {this.data.map((obj,index)=>{
            return <tr>
              <td>{obj.name}</td>
              <td>{obj.age}</td>
              <td>{obj.batch}</td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  }
}

export default Card