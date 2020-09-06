// Here we will make a Class Component

//First we import React from 'react'
import React, { Component } from "react";

// here we make a Class inherited from the React.Component

export default class GreetClass extends Component {
  render() {
    /*************************************
     *props.name= "value" ; is Wrong     *
     *************************************/
    const { name, heroName } = this.props;
    return (
      <h1>
        Hello {name} aka {heroName}
      </h1>
    );
  }
}
