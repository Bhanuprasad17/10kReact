import React, { useState } from 'react'

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleToggle = () =>{
        setDarkMode(darkMode => !darkMode)
    }

  return (
    <div style={{backgroundColor : darkMode ? 'black' : 'white', width : '500px', height : '500px'}}>
        <button onClick={handleToggle}>Toggle To {darkMode ? 'white' : 'dark'}</button>
    </div>
  )
}

export default DarkModeToggle