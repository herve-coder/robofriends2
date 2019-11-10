import React, { Component } from "react";

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCounter = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  render() {

    return (
      <button
        style={{
          background: this.props.background,
          color: this.props.color,
          padding: "0 2rem",
          margin: "1rem 0",
          boxSizing: "border-box"
        }}
        onClick={this.updateCounter}
      >
        <h1>Count: {this.state.count}</h1>
      </button>
    );
  }
}

export default CounterButton;
