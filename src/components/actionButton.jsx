import React, { Component } from "react";

class ActionButton extends Component {
  render() {
    return (
      <button
        type="button"
        className={this.getButtonClasses()}
        disabled={this.isCheckoutButtonDisabled()}
      >
        {this.getButtonText()}
      </button>
    );
  }

  getButtonClasses() {
    let defaultClasses = "btn mb-2 w-75 btn-";
    let buttonCSS = this.props.button.buttonType;
    return defaultClasses + buttonCSS;
  }

  getButtonText() {
    return this.props.button.text;
  }

  isCheckoutButtonDisabled() {
    const counters = this.props.counters;
    let countersValue = counters.map((c) => {
      return c.value;
    });
    let countersValueTotal = countersValue.reduce((a, b) => a + b, 0);

    return this.props.button.buttonType === "success" &&
      countersValueTotal === 0
      ? true
      : false;
  }
}

export default ActionButton;
