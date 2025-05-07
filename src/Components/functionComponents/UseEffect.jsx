import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [count, setCount] = useState(0)

    let handleInc = () =>{
        // setCount(count + 1)
        console.log('1')
    }

    useEffect(()=>{
        setCount(count + 1)
        // when a component calls setState inside useEffect, but useEffect 
        // either doesn't have a dependency array, or one of the dependencies changes on every render.
        // it will form infinity loop
    })

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleInc}>Inc</button>
    </>
  )
}

export default UseEffect