// This is an example of render props
// It was used in the 2nd Lesson of LUT Advanced React
// It is no longer used in the App.js as we replaced it with render Props with children
// see ToggleRPC.js

import React, { Component } from "react";

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { render } = this.props;

    return (
      <div>
        {render({
          on: this.state.on,
          toggle: this.toggle
        })}
      </div>
    );
  }
}
