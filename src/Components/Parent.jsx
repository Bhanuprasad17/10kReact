import React from 'react'
import { Child } from './Child'

export const Parent = (props) => {
    console.log(props)
  return (
    <Child parent= {props}/>
    // <></>
  )
}
