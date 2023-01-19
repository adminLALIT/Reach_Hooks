import React from "react";
import Component3 from "./Component3";
const Component2 = ({ name }) => {
  return (
    <div>
      <h1>Component 2</h1>
      <Component3 name={name} />
    </div>
  );
};

export default Component2;
