import React from 'react'
import { subjectsData } from '../../data/SubjectsData'
import Table from '../../Custom/Table'
import Heading from '../../Custom/Heading'
import Search from '../../Custom/Search'

const Subjects = () => {
  console.log("jai",subjectsData[0])
  let headings = Object.keys(subjectsData[0])
  console.log(headings)

  return (
    <>
      <Heading heading="Subjects Management"/>
      <Search type='input' placeholder='Search subject by name'/>
      <Table headings={headings} sourceData={subjectsData}/>
    </>
  )
}

export default Subjects