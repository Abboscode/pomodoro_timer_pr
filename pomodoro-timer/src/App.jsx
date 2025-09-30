import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ParentTimer from './components/ParentTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen  flex flex-col justify-between bg-amber-200'>
        <div className=' '>TOP</div>
        <div className='flex flex-col justify-items-center'  >
          <ParentTimer></ParentTimer>
        </div>
        <div>Bottom</div>
      </div>

    </>
  )
}

export default App
