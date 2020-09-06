import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massage: "Hello",
    };
  }
  clickHandler = () => {
    this.setState({ massage: "GoodBye" });
  };
  render() {
    return (
      <div>
        <div>{this.state.massage}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
