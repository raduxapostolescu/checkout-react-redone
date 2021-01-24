import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import ActionButtons from "./components/actionButtons";

class App extends Component {
  state = {
    counters: [
      { id: 1, name: "Drink 1", value: 4, type: "drink", price: 5.25 },
      { id: 2, name: "Drink 2", value: 5, type: "drink", price: 2.15 },
      { id: 3, name: "Food 1", value: 1, type: "food", price: 8.99 },
      { id: 4, name: "Drink 4", value: 0, type: "drink", price: 0.99 },
      { id: 5, name: "Food 2", value: 3, type: "food", price: 12 },
    ],
    buttons: [
      {
        id: 2,
        text: "Proceed to checkout",
        action: "Pay for items",
        buttonType: "success",
      },
      {
        id: 1,
        text: "Call a waiter",
        action: "Bring waiter to table number",
        buttonType: "warning",
      },
      {
        id: 3,
        text: "Go Back",
        action: "Go back to menu",
        buttonType: "danger",
      },
    ],
  };

  handleDeletion = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const indexOfCounters = counters.indexOf(counter);
    counters[indexOfCounters] = { ...counter };
    counters[indexOfCounters].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    this.setState((prevState) => ({
      counters: prevState.counters.map((c) => {
        return c.id === counter.id && c.value > 0
          ? { ...c, value: c.value - 1 }
          : c;
      }),
    }));
  };
  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <main className="container">
          <div className="row">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onDeletion={this.handleDeletion}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
            <ActionButtons
              buttons={this.state.buttons}
              counters={this.state.counters}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
