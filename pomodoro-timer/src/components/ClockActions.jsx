import { useState,useEffect } from 'react'

export default function ClockActions({onClikkStart,onClickPause,onClickReset,styleProp}) {

  const buttonStyle=styleProp
  return (
    <div className="flex  justify-center gap-3 ">
        <button  onClick={onClickPause} type="button" className={buttonStyle}>Pause</button>
        <button onClick={onClikkStart} type ="button" className={buttonStyle}>Start</button>
        <button onClick={onClickReset} type="button" className={buttonStyle}>Reset</button>

    </div>)}