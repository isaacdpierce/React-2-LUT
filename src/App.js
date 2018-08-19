import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Toggle, Portal, Modal } from "./Utilities";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>still in modal</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;

//   <button onClick={toggle}>Click Me!</button>
//   {on && <h1>Surprise!</h1>}
//   <Portal>{on && <h1>I'm in a portal!</h1>}</Portal>
