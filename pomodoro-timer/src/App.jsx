import { useState } from 'react'
import './App.css'

import ParentTimer from './components/ParentTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen  flex flex-col justify-between bg-gray-900'>
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
