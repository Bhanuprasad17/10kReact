import React, { useState } from "react";
import { postRegisterData } from "../../services/api";

const Register = () => {

    let [registerFormData, setRegisterFormData] = useState({
        username : '',
        email : '',
        password : '',
        gender : ''
    })

  let handelChange = (e) => {
    let { name, value } = e.target;
    setRegisterFormData({...registerFormData, [name] : value})
  };


  let handleSubmit = (e) =>{
    e.preventDefault();
    console.log(registerFormData)
    const options = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(registerFormData)
    }

    postRegisterData(options)
    .then()

  }

//   console.log(registerFormData)

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">userName :</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="enter your name"
          onChange={handelChange}
        /> <br />

        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={handelChange}>
          <option value="">select</option>
          <option value="male">Male</option>
          <option value="female">female</option>
        </select><br />

        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" onChange={handelChange}  /><br />

        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" onChange={handelChange} /><br />

        <button type="submit">Submit</button>


      </form>
    </div>
  );
};

export default Register;
