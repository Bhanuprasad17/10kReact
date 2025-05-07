import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)

    let handleInc = () =>{
        setCount(count => count + 1)
    }

    let handleDec = () =>{
      // 36757718
      setCount(count => count - 1)
    }

    let handleReset = () =>{
      setCount(count => count = 0)
    }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Counter