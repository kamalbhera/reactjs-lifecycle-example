import React, { Component } from "react";

//React Life cycle
class MountingP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  //   handleCount = () => { //render nh hoga !!
  //     this.state.count += 1;
  //     console.log(this.state.count);
  //   };
  //   setstate form 1
  handleCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  //   setstate form 2
  handleDecrease = () => {
    this.setState((prevState) => {
      console.log(prevState);
      if (prevState.count === 0) {
        return;
      }
      return {
        count: prevState.count - 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <p>Going Boss</p>
        <button onClick={this.handleCount}>Like</button>
        <button onClick={this.handleDecrease}>Dislike</button>
      </div>
    );
  }
}
export default MountingP;
