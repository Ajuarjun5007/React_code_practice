import React,{useEffect, useState} from "react";
function Counter(){
    const[totalSeconds,setTotalSeconds]=useState(300);

    const formMethod=(seconds)=>{
        let min=Math.floor(seconds/60)
        let sec=Math.floor(seconds%60)
        return `${min}:${sec}`;
        
    }
    const handleStart=()=>{
        setTotalSeconds(300);
    }
    useEffect(()=>{
       let timer= setTimeout(()=>{
            setTotalSeconds(prev=>prev-1);
        },1000)

        return ()=>{
            clearTimeout(timer);
        }

    },[totalSeconds])
    
    return(

        <>
        <div>
            {formMethod(totalSeconds)}
        </div>
        <div>
            <button onClick={handleStart}>start</button>
            <button>pause</button>
        </div>
        </>
    )
}
export default Counter;  