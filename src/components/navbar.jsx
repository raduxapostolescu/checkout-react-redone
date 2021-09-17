import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import "../styles/navbar.css";
import * as AiIcons from "react-icons/ai";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <IconContext.Provider value={{ color: "#f5f5f5", size: "1.5em" }}>
          <div className="navbar navbar-light navbar-top bg-dark rounded-bottom shadow-lg">
            <div className="w-25 justify-content-start">
              <div className="m-2">
                <FaIcons.FaAlignJustify
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    document
                      .getElementById("sidebar-root")
                      .classList.add("active");
                  }}
                />
              </div>
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
          </div>
          <nav className="nav-menu" id="sidebar-root">
            <ul className="nav-menu-items">
              <li className="nav-bar-toggle">
                <a href="#top" className="menu-bars">
                  <AiIcons.AiOutlineClose
                    style={{ cursor: "pointer", height: "2rem" }}
                    onClick={() => {
                      document
                        .getElementById("sidebar-root")
                        .classList.remove("active");
                    }}
                  />
                </a>
              </li>
              {this.props.sidebar.map((item, index) => {
                return (
                  <li key={index} className="nav-text">
                    <a href={item.link}>
                      {item.icon}
                      <span className="mx-2">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
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
