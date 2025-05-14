import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCricketersData } from "../../../services/api";
import './ViewMore.css';


const View_More = () => {
  let { id } = useParams();
  let [data, setData] = useState(null);

  useEffect(() => {
    getCricketersData().then((data) => {
      const matchObj = data.find((obj) => obj.id == id);
      setData(matchObj);
    });
  }, []);

  return (
    <div className="card-container">
      <div className="card">
        {data ? (
  <>
    <h2>{data.name}</h2>
    <p><strong>Role:</strong> {data.role}</p>
    <p><strong>Country:</strong> {data.country}</p>
    <p><strong>Age:</strong> {data.age}</p>
    <p><strong>Matches:</strong> {data.matches}</p>
    <p><strong>Runs:</strong> {data.runs}</p>
    {data.wickets && (
      <p><strong>Wickets:</strong> {data.wickets}</p>
    )}
  </>
) : (
  <p>Loading...</p>
)}

      </div>
    </div>
  );
};

export default View_More;
