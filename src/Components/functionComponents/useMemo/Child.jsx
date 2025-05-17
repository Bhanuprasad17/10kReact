import React, { memo } from 'react'

const Child = memo(
    ({count}) => {
    console.log('child')
  return (
    <div>
        child - {count}
    </div>
  )
}
)

export default Child