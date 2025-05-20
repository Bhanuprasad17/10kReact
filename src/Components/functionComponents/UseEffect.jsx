import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(1)
    const [name, setName] = useState('bhanu')

    let handleInc = () =>{
        setName('prasad')
    }

    useEffect(()=>{
        setInterval(()=>{
            console.log(count)
            setCount(count + 1)
        },1000)
    })

  return (
    <>
      <h1>useEffect</h1>
      <h1>{count}</h1>
      <button onClick={handleInc}>Inc</button>
    </>
  )
}

export default UseEffect