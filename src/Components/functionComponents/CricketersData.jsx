import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CricketersData = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate()

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


  let handleButton = (id) =>{
    navigate(`/view/${id}`)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Cricketers List</h2>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((cricketer) => (
          <div
            key={cricketer.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
            }}
          >
            <h3>{cricketer.name}</h3>
            <p>Country: {cricketer.country}</p>
            <button onClick={() => {handleButton(cricketer.id)}}>View More</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CricketersData;
