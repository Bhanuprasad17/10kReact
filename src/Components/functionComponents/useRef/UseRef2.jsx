import React, { useRef } from 'react'

const UseRef2 = () => {
    // let headingRef = {current : null}
    let headingRef = useRef(null)

    console.log('useRef')

    let handleClick = () =>{
        // console.log(headingRef)
        headingRef.current.innerText = 'Bhanuprasad'
    }
  return (
    <div>
        <h1 ref={headingRef}>Hello World</h1>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default UseRef2