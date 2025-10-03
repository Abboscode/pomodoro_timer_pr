
import Durations from "./Durations"
import { useEffect, useState } from "react"
import PeriodButtons from "./PeriodButtons"
import ClockActions from "./ClockActions"
export default function ParentTimer({ appBg }) {
    const transition = "transition duration-700 ease-in-out"
    const buttonStyle="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-200 ease-in-out shadow-md hover:shadow-xl hover:-translate-y-0.5"
    const timerStyle=" flex flex-col items-center [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] text-white-400 text-7xl md:text-7xl leading-snug font-mono font-extrabold"
    const [isRunning, setIsRunning] = useState(false)
    const [focusDuration, setFocusDuration] = useState([25, 0])
    const [breakDuration, setBreakDuration] = useState([5, 0])
    const bgClors = { focus: `bg-gradient-to-r from-red-500 to-orange-500 ${transition}`, short: `bg-gradient-to-r from-teal-400 to-yellow-200 ${transition}`, long: `bg-gradient-to-r from-cyan-500 to-blue-500 ${transition}` }
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


                    } else {

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
        setIsRunning(false)
        appBg(bgClors.short)
    }

    const onClickLongBreak = () => {
        setFocusDuration([15, 0])
        setIsRunning(false)


        appBg(bgClors.long)
    }
    const onClickPomodoro = () => {

        setFocusDuration([25, 0])

        setIsRunning(false)
        appBg(bgClors.focus)
    }
    return (

        <div className={`flex flex-col  justify-items-center  `} >
            <PeriodButtons styleProp={buttonStyle}  onClickPomodoro={onClickPomodoro} onClickLongBreak={onClickLongBreak} onClickShortBreak={onClickShortBreak} ></PeriodButtons>
            <Durations styleProp={timerStyle} focusDuration={focusDuration} breakDuration={breakDuration}></Durations>
            <ClockActions styleProp={buttonStyle}onClikkStart={() => onClickStart()} onClickPause={() => setIsRunning(false)} onClickReset={onClickReset} ></ClockActions>
        </div>


    )







}