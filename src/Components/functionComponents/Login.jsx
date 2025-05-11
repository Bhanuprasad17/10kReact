import React, { useState } from 'react'
// import { loginApiData } from '../../services/api'

const Login = () => {

    let [loginData , setloginData] = useState({
        email : '',
        password : ''
    })

    let [data ,setData] = useState([])

    let handleChange = (e) =>{
        let {name, value} = e.target
        setloginData({...loginData,[name]: value})
    }
    
    
    let handleSubmit = (e) =>{
        e.preventDefault();
        console.log(loginData)
        loginApiData(loginData).then(data => setData(data))
        localStorage.setItem("credentials",JSON.stringify(data))
    }


    console.log(data)

  return (
    <div>
        <h1>Login Form</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="email">Email : </label>
            <input type="text" name='email' value={loginData.email} placeholder='enter you email' id='email' onChange={handleChange} /> <br />

            <label htmlFor="password">Password : </label>
            <input type="text" name='password' value={loginData.password} placeholder='enter your password' id='password' onChange={handleChange} /><br />

            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login