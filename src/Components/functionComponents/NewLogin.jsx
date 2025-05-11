import React, { useState } from 'react'
import { getLoginData } from '../../services/api'

const NewLogin = () => {
    const [loginFormData, setLoginFormData] = useState({
        email : '',
        password : ''
    })

    const handleChange = (e) =>{
        let {name,value} = e.target
        // console.log(name, value)
        setLoginFormData({...loginFormData, [name] : value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(loginFormData)
        getLoginData(loginFormData)
    }

  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="email">email : </label>
            <input type="email" id='email' name='email' onChange={handleChange} /><br />

            <label htmlFor="password">password : </label>
            <input type="password" id='password' name='password' onChange={handleChange} /><br />

            <button type='submit'>submit</button>
        </form>

    </div>
  )
}

export default NewLogin