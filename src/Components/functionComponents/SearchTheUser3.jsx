// import React, { useEffect, useState } from 'react'

// const SearchTheUser3 = () => {

//     const [data, setData] = useState([])
//     const [searchItem, setSearchItem] = useState('')
//     const [searchType, setSearchType] = useState('name') 


//     useEffect(()=>{
//         const fetchData = async() =>{
//             const response = await fetch('http://localhost:3000/crickers')
//             const data = await response.json()
//             // console.log(data)
//             setData(data)
//         }
//         fetchData()
//     },[])

//     // console.log(searchItem)
//     console.log(searchType)

//     let filteredData = data.filter((obj,index)=>{
//        return obj[searchType].toLowerCase().includes(searchItem.toLowerCase())
//     })

//     let handleChange = (e) => {
//         // console.log(e.target.value)
//         setSearchType(e.target.value)
//     }

//   return (
//     <div>

//         <form action="">
//             <label htmlFor="name">Name : </label>
//             <input type="text" name='name' id='name' onChange={e => setSearchItem(e.target.value)}/> <br />

//             <label htmlFor="searchType">SearchType</label>
//             <select name="searchType" value={searchType}  id="searchTyepe" onChange={handleChange}>
//                 <option value="">Select</option> 
//                 <option value="name">name</option>
//                 <option value="role">role</option>
//                 <option value="country">country</option>
//             </select>
//         </form>



//         <table>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Role</th>
//                     <th>Country</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     filteredData.map((data,index)=>{
//                         return <tr key={index}>
//                             <td>{data.id}</td>
//                             <td>{data.name}</td>
//                             <td>{data.role}</td>
//                             <td>{data.country}</td>
//                         </tr>
//                     })
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default SearchTheUser3


import React, { useEffect, useState } from 'react';
import './SearchTheUser3.css';

const SearchTheUser3 = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchType, setSearchType] = useState('name');

  // Fetch cricketers data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/crickers');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  // Filter logic with safety check
  const filteredData = data.filter((obj) => {
    const fieldValue = obj[searchType];
    return (
      fieldValue &&
      fieldValue.toLowerCase().includes(searchItem.trim().toLowerCase())
    );
  });

  return (
    <div className="wrapper">
    <div style={{ padding: '20px' }} className='container'>
      <h2>Search Cricketers</h2>

      <form>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="searchItem">Search: </label>
          <input
            type="text"
            id="searchItem"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder={`Search by ${searchType}`}
          />
        </div>

        <div>
          <label htmlFor="searchType">Search By: </label>
          <select
            id="searchType"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="name">Name</option>
            <option value="role">Role</option>
            <option value="country">Country</option>
          </select>
        </div>
      </form>

      <hr />

      {filteredData.length > 0 ? (
        <table border="1" cellPadding="10" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Role</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ marginTop: '20px' }}>No matching cricketers found.</p>
      )}
    </div>
    </div>
  );
};

export default SearchTheUser3;
