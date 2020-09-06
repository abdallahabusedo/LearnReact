import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    // this.state.count = this.state.count + 1;
    // console.log("counter", this.state.count);

    /**this is the first method the make a counter but Problem1 happened */
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("callBack", this.state.count);
    // });

    /**the code solution of Problem1  */
    // we don't use the current state we use the prev state
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    // console.log("counter", this.state.count);
    // the console is late by 1 , the UI have count = 1 and the console = 0
    // so this is BC the setSate is asynchronous
  };
  incrementFive = () => {
    // here we will call the increment function five time and see the problem
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    //problem1:
    // the problem is that is React mack group multiple set State into a single
    // update for better performance
    // in our scenario is that all the five State calls are in one single go
    // and the updated value dose not carry over between the diff calls

    // the solution is that we want to pass a function as an argument to set state
    // method instead of passing in an object
  };
  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
