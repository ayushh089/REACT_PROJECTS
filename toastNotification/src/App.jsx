import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toast from './components/Toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toast></Toast>
    </>
  )
}

export default App
