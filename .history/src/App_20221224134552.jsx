import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Feedback } from './components/Feedback/Feedback'

function App() {

  return (
    <div className="App">
      <Header/>
      <Feedback/>
    </div>
  )
}

export default App
