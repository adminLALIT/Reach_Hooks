import "./App.css";
import Component2 from "./Component2";
import Parent from "./UseCallback/Parent";
import Component1 from "./UseContext/Component1";
import Component from "./UseMemo/Component";
import Counter from "./UseReducer/Counter";
import Comp from "./UseRef/Comp";

function App() {
  const name = "John Doe";
  return (
    <div className="App">
      {/* <h1>Hello {name}</h1>
      <Component2 name={name} /> */}
      {/* <h1>Hello {name}</h1> */}
      {/* <Component1 /> */}
      {/* <Comp/> */}
      {/* <Counter/> */}
      <Component/>
      {/* <Parent/> */}
    </div>
  );
}

export default App;
