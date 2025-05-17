import React, { useState } from 'react'


let arr = []
const UseCallback = () => {
  const [count, setCount] = useState(0)

  let funHandle = () =>{
    console.log('calling')
  }

  funHandle()
  arr.push(funHandle)

  if(arr.length >2){
    console.log(arr[0] == arr[1])
  }

  let handleInc = () =>{
    setCount(count => count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleInc}>click</button>
    </div>
  )
}

export default UseCallback