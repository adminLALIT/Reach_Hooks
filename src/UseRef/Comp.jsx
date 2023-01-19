import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";

const Comp = () => {
  const [val, setVal] = useState("");
  const [inputval, setInputval] = useState("");

  const [a,setA]=useState("");
  const prevA=useRef('');
  
  const [b,setB]=useState("");
  const bRef=useRef('');

  const count = useRef(0);
  const inputEl = useRef();
  useEffect(() => {
      setVal(inputval);
      count.current++;
      
      prevA.current=a;
  });
  const focusInput = () => {
    inputEl.current.focus();
  };
  const reset=()=>{
    setB('');
    bRef.current.focus();
  }
  const changeColor=()=>{
    bRef.current.style.color="red";
  }
  const changeName=()=>{
    bRef.current.value="John Wick";
  }

  return (
    <div>
      <h2>{val}</h2>
      {/* <h2>{count.current}</h2> */}
      <input
        type="text"
        onChange={(e) => {
          setInputval(e.target.value);
        }}
      />
      <input type="text" ref={inputEl}/>
      <button onClick={focusInput}>Focus Input</button>
      <h3>Getting previous Value</h3>
      <input type="text" value={a} onChange={(e)=>setA(e.target.value)} />
      <p>Previous Value: {prevA.current}</p>
      <p>Current Value: {a}</p>

      <h3>Handle Dom</h3>
      <input type="text" ref={bRef} value={b} onChange={(e)=>setB(e.target.value)}/>
      <button onClick={reset}>Reset</button>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default Comp;
