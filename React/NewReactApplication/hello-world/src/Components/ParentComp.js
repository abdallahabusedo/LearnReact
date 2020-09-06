import React, { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
  }

  greetParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };
  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComp;
