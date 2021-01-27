import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import ActionButtons from "./components/actionButtons";
import { defaultData } from "./data/defaultData";

class App extends Component {
  state = defaultData;

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
        <NavBar counters={this.state.counters} sidebar={this.state.sidebar} />
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
