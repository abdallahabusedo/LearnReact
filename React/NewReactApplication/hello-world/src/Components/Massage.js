import React, { Component } from "react";

class Massage extends Component {
  constructor() {
    super();
    this.state = {
      massage: " welcome abdallah",
    };
  }

  changeMassage = () => {
    this.setState({ massage: "text changed" });
  };
  render() {
    return (
      <div>
        <div>{this.state.massage}</div>
        <button onClick={() => this.changeMassage()}>Change the Text</button>
      </div>
    );
  }
}

export default Massage;
