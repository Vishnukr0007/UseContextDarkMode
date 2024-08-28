import React from 'react'
import { ThemeProvider } from './components/ThemeContext'
import Dhcomponent from './components/Dhcomponent'

function App() {
  return (
    <div>
        <ThemeProvider>
      <Dhcomponent/>
    </ThemeProvider>
      
    </div>
  )
}

export default App
