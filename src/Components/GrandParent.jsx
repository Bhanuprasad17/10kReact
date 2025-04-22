import React from 'react'
import { Parent } from './Parent'

export const GrandParent = (props) => {
    console.log(props)
  return (
    <Parent grandParent = {props} />
    // <></>
  )
}
