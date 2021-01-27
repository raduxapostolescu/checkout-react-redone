import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import "../styles/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light navbar-top bg-dark rounded-bottom shadow-lg">
          <div className="w-25 justify-content-start d-none d-md-flex">
            <IconContext.Provider value={{ color: "#ffeeea", size: "1.5em" }}>
              <div className="m-2">
                <FaIcons.FaAlignJustify />
              </div>
            </IconContext.Provider>
            <a
              className="navbar-brand"
              href="/"
              style={{
                color: "#ffeeea",
                fontFamily: "sans-serif",
                fontWeight: "100",
                fontSize: "1.5em",
              }}
            >
              Checkout
            </a>
          </div>
          <div className="navbar-pills">
            <span
              className={this.getPillTotalClasses()}
              style={{ color: "#fff", padding: "1em" }}
            >
              Total Items:
              {this.getTotalItems()}
            </span>
            <span
              className={this.getPillTotalClasses()}
              style={{ color: "#fff", padding: "1em" }}
            >
              Order Total: ${this.getTotalPrice()}
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }

  getTotalItems() {
    const counters = this.props.counters;
    let countersValue = counters.map((c) => {
      return c.value;
    });
    let countersValueTotal = countersValue.reduce((a, b) => a + b, 0);
    return countersValueTotal;
  }

  getTotalPrice() {
    const counters = this.props.counters;
    let totalPricePerItemType = counters.map((c) => {
      return c.value * c.price;
    });
    let orderTotal = totalPricePerItemType
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
    return orderTotal;
  }

  getPillTotalClasses() {
    let pillClasses = "badge rounded-pill bg-primary mx-2";
    const counters = this.props.counters;
    let countersValue = counters.map((c) => {
      return c.value;
    });
    let countersValueTotal = countersValue.reduce((a, b) => a + b, 0);
    countersValueTotal !== 0
      ? (pillClasses = "badge rounded-pill bg-primary mx-2")
      : (pillClasses = pillClasses + " d-none");

    return pillClasses;
  }
}

export default NavBar;
