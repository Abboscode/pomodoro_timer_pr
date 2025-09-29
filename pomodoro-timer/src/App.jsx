import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Durations from './components/Durations'
import PeriodButtons from './components/PeriodButtons'
import ClockActions from './components/ClockActions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-between bg-amber-200'>
        <div>TOP</div>
        <div className='flex flex-col justify-items-center'  >
          <PeriodButtons></PeriodButtons>
          <Durations></Durations>
          <ClockActions></ClockActions>
        </div>
        <div>Bottom</div>
      </div>

    </>
  )
}

export default App
