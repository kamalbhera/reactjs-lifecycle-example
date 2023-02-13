import React, { Component } from "react";

export default class UpdatingEx1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("COnstructor");
  }
  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Updated Phase");
    console.log("prevState", prevState);
    // console.log("prevProps", prevProps);
    // console.log("Props", this.props);
    console.log("State", this.state);
    if (prevState.count === 0 && this.state.count === 1) {
      this.setState({ count: 100 });
    }
  }
  handleCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCount}>Count</button>
      </div>
    );
  }
}
