

import {  useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
export default function Durations({ focusDuration=[25,0], breakDuration }) {
  
  const  [minutes, setMinutes]  = useState(focusDuration[0])
  const [seconds, setSeconds ] = useState(focusDuration[1])
  const [ isRunning, setIsRunning ] = useState(true)
  const secRef = useRef(focusDuration[1]);
  const minRef = useRef(focusDuration[0]);
 const formatTime = (time) => {
  if (time < 10&& time >=0) {
    return `0${time}`;
  }else{
    return time;
  }


 }
  useEffect(() => {
    let timer;
    const interval =1000;
 
    timer = setInterval(() => {

      if (isRunning) {
        if(secRef.current===0){
          if(minRef.current===0){
            setIsRunning(false)
            return<>you are done</>
          }else{
            minRef.current = minRef.current -1
            setMinutes(minRef.current)
           secRef.current =59
            setSeconds(secRef.current)
           
            
          }

        }else{
          secRef.current = secRef.current -1
          setSeconds(secRef.current)
        }

      }


    },interval);
   return () => clearInterval(timer);

  }, [isRunning]);
    return (
    <div className="flex justify-center h-24 text-7xl  font-serif font-bold  "> {formatTime(minutes)+":"+formatTime(seconds)}</div>
    
    )}