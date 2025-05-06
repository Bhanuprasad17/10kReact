import React, { useState } from 'react'

const TypedValue = () => {
    let [value, setValue] = useState("")

    const handleChange = (e) =>{
        // console.log(e)
        console.log(e.target.value)
        setValue(e.target.value)
    }

  return (
    <>
      <div style={{width : '100px', height : '100px', backgroundColor : value}}>Bhanu</div>
      <h1>{value}</h1>
      <input type="text" onChange={handleChange} placeholder='please enter the something'/>
    </>
  )
}

export default TypedValue