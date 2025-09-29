

import {  useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
export default function Durations({ focusDuration, breakDuration }) {
  
  const  [minutes, setMinutes]  = useState(25)
  const [seconds, setSeconds ] = useState(0)
  const [ isRunning, setIsRunning ] = useState(true)
  const secRef = useRef(0);
  const minRef = useRef(25);

  useEffect(() => {
    let timer;
    const interval =1000;
 
    timer = setInterval(() => {

      if (isRunning) {
        if(secRef.current===0){
          if(minutes===0){
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

  }, []);
    return (
    <div className="flex justify-center h-24 text-7xl  font-serif font-bold  ">{minutes}:{seconds}</div>
    
    )}