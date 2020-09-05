// Here we will make a Functional Component

//First we import React from 'react'
import React from "react";

//here we make a JS NORMAL function

/* function Greet() {
   return <h1>Hello Posidoon</h1>;
 }
*/
// or we can use the ES6 Arrow Function
const Greet = (props) => {
  console.log(props);
  return (
    <h1>
      Hello {props.name} aka {props.heroName}
    </h1>
  );
};

// then we Export this function to use it in the App Component (parent Component)

export default Greet;

// What is the Difference between export default and export
