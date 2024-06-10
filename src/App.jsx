import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Toaster } from './components/ui/toaster'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='toast'>
     <Toaster />
     </div>
    </>
  )
}

export default App
