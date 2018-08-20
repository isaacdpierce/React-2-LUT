import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'Utilities';
import { Modal, Card, StyledButton } from 'Elements';
import User from './User';
import UserProvider from './UserProvider';
import Drag from './Elements/Drag';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Playground</h1>
          </header>

          <User />

          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <StyledButton onClick={toggle}>Hungry?</StyledButton>
                <Modal on={on} toggle={toggle}>
                  <h1>Have yerself an eggroll</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>

          <section>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <StyledButton onClick={toggle}>SHOW / HIDE</StyledButton>
                  <Transition
                    from={{ opacity: 0, bg: '#999', height: '0px' }}
                    enter={{ opacity: 1, bg: '#666', height: '200px' }}
                    leave={{ opacity: 0, bg: '#111', height: '0px' }}
                  >
                    {on && Header}
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>

          <Drag />
        </div>
      </UserProvider>
    );
  }
}

const Header = styles => (
  <Card
    style={{
      opacity: styles.opacity,
      background: styles.bg,
      overflow: 'hidden',
      height: styles.height
    }}
  >
    <h1>BOOSH!!</h1>
  </Card>
);

export default App;
