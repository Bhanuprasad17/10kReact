import React, { useState } from 'react'
import { postRegisterData } from '../../services/api'

const NewRegister = () => {

    let [registerFormData, setRegisterFormData] = useState({
        username : '',
        password : '',
        gender : '',
        email : ''
    })

    const handleChange = (e) => {
        let {name,value} = e.target
        setRegisterFormData({...registerFormData, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registerFormData)
        postRegisterData(registerFormData)
    }

  return (
    <div>


        <form action="" onSubmit={handleSubmit}>

            <label htmlFor="username">UserName :</label>
            <input type="text" name='username' id='username' onChange={handleChange}/><br />

            <label htmlFor="email">Email :</label>
            <input type="email" name='email' id='email' onChange={handleChange} /><br />


            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" onChange={handleChange}>
                <option value="">select</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <br />

            <label htmlFor="password">password</label>
            <input type="password" id='password' name='password' onChange={handleChange}/><br />


            <button type='submit'>submit</button>

        </form>
    </div>
  )
}

export default NewRegister