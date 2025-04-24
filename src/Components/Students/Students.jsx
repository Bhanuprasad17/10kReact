import React from "react";
import { studentData } from "../../data/studentData";
import Table from "../../Custom/Table";
import Heading from "../../Custom/Heading";
import Search from "../../Custom/Search";

const Students = () => {
  console.log("from student component");
  // console.log(Object.keys(studentData[0]))
  console.log(studentData[0]);
  let headings = Object.keys(studentData[0]);
  console.log(headings);
  return (
    <>
      <Heading heading="Studenet Management"/>
      <Search type='input' placeholder='search student by name or id'/>
      <Table headings={headings} sourceData={studentData} />
    </>
  );
};

export default Students;
