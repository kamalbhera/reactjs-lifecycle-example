import React, { Component } from "react";

export default class UpdateErrorLoop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("PrevState", prevState);
    console.log("State", this.state);
    this.setState({ count: 100 }); // if we called setState directly react will fall error.
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState + 1,
      };
    });
  };
  render() {
    console.log("Render Called");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
