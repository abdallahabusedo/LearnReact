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
import FunctionClick from "./Components/functionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComp from "./Components/ParentComp";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
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
        {/* until the setState */}
        {/* <Massage />
        <Counter /> */}
        {/* Destructuring props and state */}
        {/* <Greet name="abdallah" heroName="ironMan" />
        <GreetClass name="Ahmed" heroName="Hulk" /> */}
        {/* Event Handling */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* Binding Event Handlers */}
        {/* <EventBind /> */}
        {/* Methods as props */}
        {/* <ParentComp /> */}
        {/* Conditional rendering */}
        {/* <UserGreeting /> */}
        {/* List Rendering */}
        <NameList />
      </header>
    </div>
  );
}

export default App;
