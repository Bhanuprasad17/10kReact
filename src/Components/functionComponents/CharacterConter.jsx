import React, { useState } from 'react'

const CharacterConter = () => {
    let [char, setChar] = useState('')

    let handleChange = (e) =>{
        setChar(e.target.value)
        // console.log(e.target.value)
    }

  return (
    <>
       <h1>{char.length}</h1>
       <input type="text"  placeholder='enter something' onChange={handleChange}/>
    </>
  )
}

export default CharacterConter