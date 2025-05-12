import React, { useEffect, useState } from 'react'

const SearchTheUser3 = () => {

    const [data, setData] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [searchType, setSearchType] = useState('name') 


    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch('http://localhost:3000/crickers')
            const data = await response.json()
            // console.log(data)
            setData(data)
        }
        fetchData()
    },[])

    // console.log(searchItem)
    console.log(searchType)

    let filteredData = data.filter((obj,index)=>{
       return obj[searchType].toLowerCase().includes(searchItem.toLowerCase())
    })

    let handleChange = (e) => {
        // console.log(e.target.value)
        setSearchType(e.target.value)
    }

  return (
    <div>

        <form action="">
            <label htmlFor="name">Name : </label>
            <input type="text" name='name' id='name' onChange={e => setSearchItem(e.target.value)}/> <br />

            <label htmlFor="searchType">SearchType</label>
            <select name="searchType" value={searchType}  id="searchTyepe" onChange={handleChange}>
                <option value="">Select</option> 
                <option value="name">name</option>
                <option value="role">role</option>
                <option value="country">country</option>
            </select>
        </form>



        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredData.map((data,index)=>{
                        return <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.role}</td>
                            <td>{data.country}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default SearchTheUser3