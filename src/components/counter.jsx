import React, { Component } from "react";
import { BiDrink } from "react-icons/bi";
import { GiOpenedFoodCan } from "react-icons/gi";
import { IconContext } from "react-icons";

const buttonClasses = "btn btn-secondary btn-sm";

class Counter extends Component {
  render() {
    const isIconDrink = this.props.counter.type === "drink";
    return (
      <div className="d-flex">
        <div className="my-2 me-2 d-flex justify-content-around">
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className={buttonClasses}
            disabled={this.props.counter.value <= 0 ? 1 : 0}
          >
            -
          </button>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className={buttonClasses}
          >
            +
          </button>
          <button
            onClick={() => this.props.onDeletion(this.props.counter.id)}
            className="btn btn-danger btn-sm mx-2"
          >
            Delete
          </button>
        </div>
        <h4
          className="my-3"
          style={{
            color: "#10559e",
            fontFamily: "sans-serif",
            fontWeight: "100",
          }}
        >
          {this.props.counter.name}
        </h4>
        <div className="my-3 mx-2 d-none d-md-block">
          <IconContext.Provider value={{ color: "#10559e", size: "1.5em" }}>
            {isIconDrink ? <BiDrink /> : <GiOpenedFoodCan />}
          </IconContext.Provider>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge mx-3 p-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 0 : count;
  }
}

export default Counter;
