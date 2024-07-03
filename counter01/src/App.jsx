import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(1)
  const addCounter=()=>{
    counter=counter+5
    setCounter(counter)

  }
  const subCounter=()=>{
    counter=counter-5
    setCounter(counter)

  }
  return (
    <>
      <h1>Ayush</h1>
      <h1>Counter Value :{counter}</h1>
      <button onClick={addCounter}>Inc</button><br></br>
      <button onClick={subCounter}>Dec{counter}</button>
    </>
  )
}

export default App
