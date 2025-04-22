import React from "react";
import "../styles/cards.css";
import {data} from '../data/studentData.js'
import { NoDataFound } from "./NoDataFound.jsx";

export const Cards = () => {
  // console.log(data,"bhanu")

  return (
    <>
      <div className="cardsContainer">
        {
          data.length > 0 ? (<>
           {
            data.map(data =>{
              return <div>
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.batch}</p>
              </div>
            })
           }
            
          </>) : (<>
            <NoDataFound />
          </>)
        }
       </div>
    </>
  );
};
