import "./App.css";
import Component2 from "./Component2";
import Component1 from "./UseContext/Component1";
import Comp from "./UseRef/Comp";

function App() {
  const name = "John Doe";
  return (
    <div className="App">
      {/* <h1>Hello {name}</h1>
      <Component2 name={name} /> */}
      {/* <h1>Hello {name}</h1> */}
      {/* <Component1 /> */}
      <Comp/>
    </div>
  );
}

export default App;
