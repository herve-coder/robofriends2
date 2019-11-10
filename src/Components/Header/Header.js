import React, { Component } from "react";
import CounterButton from "../../Containers/CounterButton";

class Header extends Component {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return true;
  //   }

  render() {
    return (
      <div>
        <h1 className="white">ROBOFRIENDS</h1>
        <CounterButton color={"#fff"} background={"#001b44"} />
      </div>
    );
  }
}

export default Header;
