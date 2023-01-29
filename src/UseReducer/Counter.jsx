import React, { useReducer } from 'react'


const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case "INC":
            return state+1;
        case "DEC":
            return state-1;
        default:
            return state;
    }
}
function Counter() {
    
    const [count,dispatch]=useReducer(reducer,initialState);

  return (
    <div style={{marginTop:"250px"}}>
      <button onClick={()=>dispatch("INC")} style={{backgroundColor:"coral",padding:"15px",fontSize:"16px", margin:"5px", borderRadius:"5px"}}>Increase</button>
      <h2>{count}</h2>
      <button onClick={()=>dispatch("DEC")} style={{backgroundColor:"coral",padding:"15px",fontSize:"16px", margin:"5px", borderRadius:"5px"}}>Decrease</button>
    </div>
  )
}

export default Counter
