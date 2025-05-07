import React, { useState } from 'react'

function PasswordToggle() {
    let [show, setShow] = useState(false)

    let passwordToggle = (e) =>{
        setShow(!show)
    }
  return (
    <div>
        <input type={show ? 'password' : 'text'} placeholder='enter password' />
        <button onClick={passwordToggle}>{show ? 'Show' : 'Hide'}</button>
    </div>
  )
}

export default PasswordToggle