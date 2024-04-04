import React, { useCallback, useEffect, useState } from "react";


// usecallback is similar to useMemo function 
// it memoizes the function and avoids unneccesary re-renders
// This allows us to isolate resource intensive functions so that they will 
// not automatically run on every render.

// here we pass setList function to <List> as prop .
// however the fucntion passes everytime it re-renders
//  whenveer the function passes it called in <List> component and set some value
// to avoid this we can use useCallback
const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const darkStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "red" : "black",
    padding: "30px",
    gap: "10px",
  };
  const changeTheme = () => {
    setDark((prev) => !prev);
    console.log("changed Theme");
  };
  const setList=useCallback(()=> {
    // console.log("setList is clicked")
    return [count,count+1,count+2]
  })

  const increment = () => {
    // console.log("increment clicked");
    setCount(count + 1);
  };
  const decrement = () => {
    // console.log("decrement clicked");
    setCount(count - 1);
  };
  return (
    <div style={darkStyle}>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decerement</button>
      <button onClick={() => changeTheme()}>change theme</button>
      <p>{count}</p>
      <List setList={setList}/>
    </div>
  );
};
const List = ({setList}) =>{
    const [listItems,setListItems] = useState([]);
    useEffect(()=>{
        console.log("list items set")
        setListItems(setList());
    },[setList])
    return(
        <>
            {
                listItems.map((item,index)=>(
                    <div key={index}>{item}</div>
                ))
            }
        </>
    )
}
export default UseCallback;
