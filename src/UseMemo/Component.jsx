import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Component() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  function multiply() {
    console.log("*************");
    return add * 10;
  }

  // useEffect(()=>{
  //   console.log("$$$$$$$$$$$$$$$");
  // },[add])

  const mult = useMemo(() => {
    // useMemo hook works the same as useEffect only when one of its dependencies changes
    console.log("#############"); // It only recomputes the memoized value when on its dependencies has changed and returns the memoized value
    return add * 10;
  }, [add]);

  const noRender = useMemo(() => {
    console.log("@@@@@@@@@@@@@");
    return (
      <div style={{ color: "coral" }}>
        <h3>
          No render {count} --- {name}
        </h3>
        <h3>useEffect vs useMemo</h3>
      </div>
    );
  }, [name]);

  return (
    <div>
      <h1> useMemo Hook</h1>
      {/* {multiply()} */}
      {mult}
      <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setSub(sub - 1)}>Substraction</button>
      <span>{sub}</span>

      {noRender}
      <h3>Render again {count}</h3>
      <h3>useEffect vs useMemo</h3>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setName("Roronoa Zoro")}>Update Name</button>
    </div>
  );
}

export default Component;
