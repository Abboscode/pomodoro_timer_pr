import { useState } from 'react'
import './App.css'

import ParentTimer from './components/ParentTimer'

function App() {
  const [background ,setBackground]= useState("bg-orange-600")
  const changeBg = (bg) => {
    setBackground(bg)
  }

  return (
    <>
      <div className={`h-screen w-screen  flex flex-col justify-between ${background}`} >
        <div className='flex mb-20 pt-12  justify-center justify-items-center'><div className='  w-fit font-serif font-extrabold text-6xl'>Pomdoro</div></div>
        <div className='flex flex-col justify-items-center grow'  >
          <ParentTimer appBg={changeBg}></ParentTimer>
        </div>
        <div>Bottom</div>
      </div>

    </>
  )
}

export default App
