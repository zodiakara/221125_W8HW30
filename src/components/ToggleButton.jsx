import Button from "react-bootstrap/Button";
import React from "react";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </Button>
    );
  }
}
export default ToggleButton;
