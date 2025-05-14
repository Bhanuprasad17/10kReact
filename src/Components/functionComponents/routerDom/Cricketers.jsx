import React, { useEffect, useState } from "react";
import { getCricketersData } from "../../../services/api";
import './Cricketers.css'; // ✅ import the CSS file
import { useNavigate } from "react-router-dom";

const Cricketers = () => {
  const [data, setData] = useState([]);

  let nagivate = useNavigate()

  useEffect(() => {
    getCricketersData().then((data) => setData(data));
  }, []);

  return (
    <>
      <table className="cricketers-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((cricketer, index) => (
              <tr key={index}>
                <td>{cricketer.id}</td>
                <td>{cricketer.name}</td>
                <td>{cricketer.role}</td>
                <td><button onClick={e => nagivate(`/viewMore/${cricketer.id}`)}>View_More</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="no-data">No Data Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Cricketers;
