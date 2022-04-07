import React, { Component } from "react";
import Counter from "./counter";
import "../styles/counters.css";

class Counters extends Component {
  render() {
    return (
      <div className="counters-container">
        <button
          onClick={this.props.onReset}
          className="resetButton btn btn-warning my-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDeletion={this.props.onDeletion}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
