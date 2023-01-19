import React from "react";
import Component4 from "./Component4";
const Component3 = ({ name }) => {
  return (
    <div>
      <h1>Component 3</h1>
      <Component4 name={name} />
    </div>
  );
};

export default Component3;
