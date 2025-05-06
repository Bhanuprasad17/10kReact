import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)

    let handleInc = () =>{
        // setCount(count => count + 1)
        // setCount(count => count + 1)
        // setCount(count => count + 1)
        // setCount(count => count + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleInc}>Click</button>
    </>
  )
}

export default Counter