import React from "react";
import { createContext } from "react";
import Component2 from "./Component2";
const data = createContext();
const Component1 = () => {
  const name = "Suzan Smith";
  return (
    <>
      <h1>Component 1</h1>
      <h1>Hello {name}</h1>
      <data.Provider value={name}>
        <Component2 />
      </data.Provider>
    </>
  );
};
export { data };
export default Component1;
