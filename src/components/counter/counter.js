import React from "react";
import "./counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = e => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count });
  };

  decrement = e => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div id="counter-container">
        <button onClick={this.decrement}>-</button>
        <span>Count: {this.state.count} </span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
