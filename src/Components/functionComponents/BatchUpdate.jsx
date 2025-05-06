import React, { useState } from 'react'

const BatchUpdate = () => {
    const [count,setCount] = useState(0)
    let handleInc = () =>{
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleInc}>Click Me</button>
    </div>
  )
}



export default BatchUpdate


// In React, batching means that multiple state updates are grouped together and processed 
// in a single render cycle, rather than causing a re-render after each individual update.