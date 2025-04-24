import React from 'react'
import { staffData } from '../../data/StaffData'
import Table from '../../Custom/Table'
import Heading from '../../Custom/Heading'
import Search from '../../Custom/Search'

function Staff() {
  const headings = Object.keys(staffData[0])
  return (
    <>
      <Heading heading = "Staff Management"/>
      <Search type='search' placeholder='search student by name or email'/>
      <Table headings={headings} sourceData={staffData}/>
    </>
  )
}

export default Staff