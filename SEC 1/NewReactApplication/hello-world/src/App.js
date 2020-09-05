import React from "react";
import "./App.css";
// you must import the Exported component and implement it as a self close tag
import Greet from "./Components/GreetFunc";
// if the Exportation was export Greet
// then you are must send the exact same name of the Function
// and import it like this:
// import { Greet } from "./Components/GreetFunc";
import GreetClass from "./Components/GreetClass";
import Massage from "./Components/Massage";
import Counter from "./Components/Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet />
        <GreetClass /> */}
        {/* for Props part we will send the name attribute  */}
        {/* <Greet name="Abdallah" heroName="ironMan" />
        <Greet name="Sara" heroName="superMan" />
        <Greet name="Kareem" heroName="spiderMan" />
        <GreetClass name="Samer" heroName="Flash" />
        <GreetClass name="Ahmed" heroName="Hulk" />
        <GreetClass name="Kenzy" heroName="Wonder Woman" /> */}
        <Massage />
        <Counter />
      </header>
    </div>
  );
}

export default App;
