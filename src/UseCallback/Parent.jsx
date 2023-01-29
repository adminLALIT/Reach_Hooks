import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Child from './Child';

function Parent() {

    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);

    const demo = useCallback(()=>{},[count]);   // useCallback works same as useMemo, the only difference being that it returns a function.
                                                // It will return a memoized version of the callback that only changes when one of its dependencies
                                                // has changed.
  return (
    <div>
      <h1>useCallback hook</h1>
      <h2>Parent Component</h2>
      <Child demo={demo}/>
      <h3>{add}</h3>
      <button onClick={()=>{setAdd(add+1)}}>Addition</button>
      <h3>{count}</h3>
      <button onClick={()=>{setCount(count+1)}}>Addition</button>      
    </div>
  )
}

export default Parent
