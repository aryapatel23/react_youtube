import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Sidebar from './Components/Sidebar.jsx'
import Mainbar from './Components/Mainbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Sidebar/>
        <Mainbar/>
        </div>
    </>
  )
}

export default App
