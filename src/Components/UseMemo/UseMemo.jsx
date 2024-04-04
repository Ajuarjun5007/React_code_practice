import { useMemo, useState } from "react";
// The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
// the conditon is:
// it needs to be pure function.
// A Pure Function is a function (a block of code) 
// that always returns the same result if the same arguments are passed.
// function  should not cause re-render
// it should not change value in outer scope
export const UseMemo = () => {
    const [num, setNum] = useState(0);
    const[arr,setArr]=useState([1, 2, 3, 4, 12, 32]); 
    const [obj,setObj]=useState({"name":"aju"});
    // const arr = [12,3,34,3];
    // const obj={
    //     "name":"aju",
    // }
    let x=4;
    // Define the function to calculate the maximum number
    const calculateMaxNumber=()=>{
        console.log("maxNumber calculated");
        let max = 0;
        // for (let i of arr) {
        //     if (i > max) {
        //         max = i;
        //     }
        // }
        x++;
        setObj({"dog":"leo"})
        return max;
    };
// the function only run when it dependency changes

    const maxNumber = useMemo(() => calculateMaxNumber(),[arr]); // Only recalculate when arr changes

    return (
        <>
            <div className="">
                <button
                    style={{ background: "black", color: "red" }}
                    onClick={() =>  setNum(num + 1)}
                >
                    increment
                </button>
                <button
                    style={{ background: "black", color: "red" }}
                    onClick={() => setNum(num - 1)}
                >
                    decrement
                </button>
                <p>{maxNumber}</p> {/* Use maxNumber directly */}
                <p>{num}</p>
            </div>
        </>
    );
};
