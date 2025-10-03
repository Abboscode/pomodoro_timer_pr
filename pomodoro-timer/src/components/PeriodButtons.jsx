

let count =0;
export default function PeriodButtons({onClickShortBreak,onClickLongBreak,onClickPomodoro, styleProp}) {
count++;
console.log("PeriodButtons Rendered "+count+" times");
const buttonStyle= "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-200 ease-in-out shadow-md hover:shadow-xl hover:-translate-y-0.5"
  
return (
    
    <div className="flex justify-center gap-3">
        <button  onClick={()=>onClickPomodoro()} type ="button" className={buttonStyle}>pomodoro</button>
        <button onClick={()=>onClickShortBreak()}  type="button" className={buttonStyle}>short break</button>
        <button onClick={()=>onClickLongBreak()} type="button" className={buttonStyle}>long break</button>

    </div>)}