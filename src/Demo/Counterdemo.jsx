import React, { useState } from 'react'

const Counterdemo = () => {
    const [count,setCount]  = useState(0);
    // const[countValue,seCountValue] = useState()
  return (

    <div>
      <div>{(count>0)?(count):(0)}</div>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>

    </div>
  )
}

export default Counterdemo;
