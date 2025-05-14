import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewMore = () => {
  const { id } = useParams();
  const [cricketer, setCricketer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/crickers');
    const data = await response.json();
    console.log("Fetched data:", data); 
    const selectedCricketer = data.find(item => item.id == parseInt(id));
    console.log("Selected Cricketer:", selectedCricketer);
    if (selectedCricketer) {
      setCricketer(selectedCricketer);
    } else {
      console.error("Cricketer not found");
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};


    fetchData();
  }, [id]);

  if (!cricketer) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{cricketer.name}</h2>
      <p>Role: {cricketer.role}</p>
      <p>Country: {cricketer.country}</p>
      <p>Age: {cricketer.age}</p>
      <p>Matches Played: {cricketer.matches}</p>
      <p>Runs Scored: {cricketer.runs}</p>
      <p>Wickets Taken: {cricketer.wickets}</p>
    </div>
  );
};

export default ViewMore;
