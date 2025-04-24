import React from "react";

const Table = ({headings, sourceData}) => {
    console.log(headings)
    console.log(sourceData)
  return (
    <>
      <table>
        <thead>
          <tr>
            {headings.map((data, index) => {
              return <th>{data[0].toUpperCase() + data.slice(1,)}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {sourceData.map((data, index) => {
            return (
              <>
                <tr style={{ textAlign: "center" }}>
                  {headings.map((cell, index) => {
                    return <td>{data[cell]}</td>
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
