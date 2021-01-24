import React, { Component } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { IconContext } from "react-icons";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark rounded-bottom shadow-lg">
        <div className="d-flex w-25 justify-content-start">
          <IconContext.Provider value={{ color: "#ffeeea", size: "1.5em" }}>
            <div className="m-2">
              <FaShoppingBasket />
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
        <div className="float-left">
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
    countersValueTotal != 0
      ? (pillClasses = pillClasses)
      : (pillClasses = pillClasses + " d-none");

    return pillClasses;
  }
}

export default NavBar;
