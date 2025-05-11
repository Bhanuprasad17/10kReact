import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [count, setCount] = useState(0)

    let handleInc = () =>{
        setCount(count => count + 1)
    }

    useEffect(()=>{
        setCount(count => count + 1)
    },[])

  return (
    <div>
        {count}
        <button onClick={handleInc}>+</button>
    </div>
  )
}

export default UseEffect2