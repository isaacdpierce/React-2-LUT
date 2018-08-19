/* eslint react/prop-types: 0 */
import React, { Component } from "react";
import Portal from "./Portal";
import styled from "styled-components";

export default class Modal extends Component {
  render() {
    return (
      <Portal>
        <ModalWrapper>
          <h1>{this.props.children}</h1>
        </ModalWrapper>
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: royalblue;
`;
