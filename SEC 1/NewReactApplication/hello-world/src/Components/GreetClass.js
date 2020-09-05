// Here we will make a Class Component

//First we import React from 'react'
import React, { Component } from "react";

// here we make a Class inherited from the React.Component

export default class GreetClass extends Component {
  render() {
    /*************************************
     *props.name= "value" ; is Wrong     *
     *************************************/
    return (
      <h1>
        Hello {this.props.name} aka {this.props.heroName}
      </h1>
    );
  }
}
