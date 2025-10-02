
import Durations from "./Durations"
import { useEffect, useState } from "react"
import PeriodButtons from "./PeriodButtons"
import ClockActions from "./ClockActions"
export default function ParentTimer({appBg}) {
    const [isRunning, setIsRunning] = useState(false)
    const [focus, setFocus] = useState(false)
    const [breakTime, setBreakTime] = useState(false)
    const [longBreak, setLongBreak] = useState(false)
    const [focusDuration, setFocusDuration] = useState([25, 0])
    const [breakDuration, setBreakDuration] = useState([5, 0])
    const bgClors={focus:"bg-red-600",short:"bg-green-600",long:"bg-blue-600"}
    useEffect(() => {

        const timerId = setInterval(() => {
            if (isRunning) {
                setFocusDuration((prev) => {
                    const [min, sec] = prev;
                    if (sec === 0) {
                        if (min === 0) {
                            // When focus time is over, switch to break time
                            return [0, 0]; // You can handle the transition to break time here
                        } else {
                            // Decrease minutes and reset seconds to 59
                            return [min - 1, 59];
                        }


                    }else{

                        return [min, sec - 1];
                    }
                })

            }

        }, 1000);
        return () => clearInterval(timerId);

    }, [isRunning]);



    const onClickReset = () => {
        setFocusDuration([25, 0])
        setBreakDuration([5, 0])
        setIsRunning(false)



    }
    const onClickStart = () => {

        setIsRunning(true);

        console.log(isRunning);

    }
    const onClickShortBreak = () => {
        setFocusDuration([5, 0])
        setBreakTime(true)
        setIsRunning(false)
        setFocus(false)
        setLongBreak(false)
        appBg(bgClors.short)
    }

    const onClickLongBreak = () => {
        setFocusDuration([15, 0])
        setLongBreak(true)
        setIsRunning(false)
        setFocus(false)
        setBreakTime(false)
        appBg(bgClors.long)
    }
    const onClickPomodoro = () => {
        
        setFocusDuration([25, 0])
        setFocus(true)
        setIsRunning(false)
    appBg(bgClors.focus)}
    return (

        <div className={`flex flex-col  justify-items-center ${focus ? bgClors.focus : breakTime ? bgClors.short : longBreak ? bgClors.long : ''}  p-5 rounded-lg `} >
            <PeriodButtons onClickPomodoro={onClickPomodoro} onClickLongBreak={onClickLongBreak} onClickShortBreak={onClickShortBreak} ></PeriodButtons>
            <Durations  focusDuration={focusDuration} breakDuration={breakDuration}></Durations>
            <ClockActions onClikkStart={() => onClickStart()} onClickPause={() => setIsRunning(false)} onClickReset={onClickReset} ></ClockActions>
        </div>


    )







}