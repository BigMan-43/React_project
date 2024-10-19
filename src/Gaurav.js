import React, { useState } from 'react'
import "./Gaurav.css"

function Gaurav() {
    let [count,setCount] = useState(15);
    function addValue(){
        console.log("value added");
    }
    function decValue(){
      console.log("value added");
    }
  return (
    <div className='gaurav'>
    <h1>Counter Value {count}</h1>
    <button onClick={()=>{addValue()}}>Add Value</button>
    <br />
    <button onClick={decValue}>Decrease Value</button>
    </div>
  )
}

export default Gaurav