import React from "react";
import { data } from "./Component1";
import { useContext } from "react";
const Component3 = () => {
  const name = useContext(data);
  return (
    <div>
      <h1>Component 3</h1>
      <h2>Hello again {name}</h2>
    </div>
  );
};

export default Component3;
