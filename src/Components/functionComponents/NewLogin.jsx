import React, { useState } from "react";
import { getLoginData } from "../../services/api";
import { useNavigate } from "react-router-dom";

const NewLogin = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate =useNavigate()

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataLogin = await getLoginData(loginFormData);
    setLoginFormData({ email: "", password: "" });

    if (dataLogin) {
      console.log(dataLogin)
      // setData([dataLogin]); // if you need it for rendering
      // console.log(data,'data')
      localStorage.setItem("credentials", JSON.stringify(dataLogin)); // use dataLogin directly
      navigate("/home")
    } else {
      console.warn("Invalid login");
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">email : </label>
        <input
          type="email"
          id="email"
          value={loginFormData.email}
          name="email"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">password : </label>
        <input
          type="password"
          id="password"
          value={loginFormData.password}
          name="password"
          onChange={handleChange}
        />
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default NewLogin;
