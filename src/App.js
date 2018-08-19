import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./ToggleRPC"; // using render Props with children
import Portal from "./Portal";
import Modal from "./Modal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Modal>
          <h1>still in modal</h1>
        </Modal>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Click Me!</button>
              {on && <h1>Surprise!</h1>}
              <Portal>{on && <h1>I'm in a portal!</h1>}</Portal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
