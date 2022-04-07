import React, { Component } from "react";
import ActionButton from "./actionButton";
import "../styles/actionButtons.css";

class ActionButtons extends Component {
  render() {
    return (
      <div className="actionButtons d-flex flex-column justify-content-end align-items-end w-50">
        {this.props.buttons.map((button) => (
          <ActionButton
            button={button}
            key={button.id}
            counters={this.props.counters}
          />
        ))}
      </div>
    );
  }
}

export default ActionButtons;
