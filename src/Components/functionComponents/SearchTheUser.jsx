import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchTheUser = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    email : ''
  })

  const [findUser, setFindUser] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("http://localhost:3000/users");
      let data = response.data;
      setData(data);
    };
    fetchData();
  }, []);

//   console.log(data, "setData");

  let handleChange = (e) =>{
    let {name,value} = e.target
    setUser({[name] : value})
  }

  let handleSubmit = (e) =>{
    e.preventDefault()
    // console.log(user)
    console.log(data)
    let findData =  data.find((obj,index) => {
        return obj.email == user.email
    })
    // console.log(findData)   
    setFindUser([...findUser, findData])
  }

//   console.log(findUser)

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          id="email"
          onChange={handleChange}
        />
        <br />

        <button type="submit">submit</button>
      </form>

      {
          findUser.length > 0 ? <>
           <h3>{findUser[0].id}</h3>
           <h3>{findUser[0].username}</h3>
           <h3>{findUser[0].email}</h3>
           <h3>{findUser[0].gender}</h3>
        </> : <>
          <h1>No Data Available</h1>
        </>
      }


    </div>
  );
};

export default SearchTheUser;
