import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {

    const [count, setCount] = useState(1)

    let handleInc = () =>{
        setCount(count + 1)
    }

    useEffect(()=>{
      let interval = setInterval(()=>{
        setCount(count => count + 1)
      },1000)
      return () => clearInterval(interval)
    },[count])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleInc}>Inc</button>
    </div>
  )
}

export default UseEffect3