import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comments: "",
      Topic: "react",
    };
  }
  handelUserName = (event) => {
    this.setState({ userName: event.target.value });
  };
  handelComments = (event) => {
    this.setState({ comments: event.target.value });
  };
  handelTopic = (event) => {
    this.setState({ Topic: event.target.value });
  };
  handelSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.Topic}`);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <div>
            <label>username</label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handelUserName}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={this.state.comments}
              onChange={this.handelComments}
            ></textarea>
          </div>
          <div>
            <select value={this.state.Topic} onChange={this.handelTopic}>
              <option value="react">react</option>
              <option value="Vue">Vue</option>
              <option value="Angular">Angular</option>
            </select>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
