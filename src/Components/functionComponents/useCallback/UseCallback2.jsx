import React, { useCallback, useState } from 'react'
import Child from './Child'


let arr = []
const UseCallback2 = () => {
  const [count, setCount] = useState(0)

  let funHandle = useCallback(() =>{
    console.log('calling')
  },[count < 2 ? 0 : count])

  funHandle()
  arr.push(funHandle)

    if(arr.length == 2){
        console.log(arr[0] == arr[1]) 
        console.log(arr[0] == arr[2]) 
    }

  let handleInc = () =>{
    setCount(count => count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleInc}>click</button>
      <Child handleInc={handleInc}/>
    </div>
  )
}

export default UseCallback2