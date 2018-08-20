import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { StyledButton } from 'Elements';
import { UserContext } from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <Fragment>
            <UserInfo>
              <h1>Profile</h1>
              <h3>{context.user.name}</h3>
              <h4>{context.user.email}</h4>
              <StyledButton onClick={context.logout}>Logout</StyledButton>
            </UserInfo>
          </Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

const UserInfo = styled.div`
  h1,
  h3 {
    text-transform: uppercase;
  }
`;
