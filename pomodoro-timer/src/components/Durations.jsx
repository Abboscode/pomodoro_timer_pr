

import {  useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
export default function Durations({ isFocus ,isBreak, focusDuration=[25,0], breakDuration }) {
  
 const [min, sec] = isFocus? focusDuration: (isBreak)? breakDuration:focusDuration;
 
  
 const formatTime = (time) => {
  if (time < 10&& time >=0) {
    return `0${time}`;
  }else{
    return time;
  }


 }
    return (
    <div className="flex justify-center h-24 text-7xl  font-sans font-extrabold  "> {formatTime(min)+":"+formatTime(sec)}</div>
    
    )}