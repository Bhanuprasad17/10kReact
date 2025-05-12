import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchTheUser2 = () => {
  let [data, setData] = useState([]);
  let [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("http://localhost:3000/users");
      let data = response.data;
      setData(data);
    };
    fetchData();
  }, []);

//   console.log(searchItem);

  let filteredData = data.filter((user) =>
    user.username.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <form action="">
        <label htmlFor="username">UserName : </label>
        <input
          type="text"
          name="username"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </form>
      <hr />

      {data.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((obj, index) => {
                return (
                  <tr key={index}>
                    <td>{obj.id}</td>
                    <td>{obj.username}</td>
                    <td>{obj.email}</td>
                    <td>{obj.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchTheUser2;
