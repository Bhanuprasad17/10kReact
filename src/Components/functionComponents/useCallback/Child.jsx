import React, { memo } from 'react'

const Child = memo(({handleInc}) => {
    console.log('child')
  return (
    <div>
        <button onClick={handleInc}>click child</button>

    </div>
  )
})

export default Child