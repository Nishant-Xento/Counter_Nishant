import React from "react";

class Button extends React.Component {
  stylebtnwrapper = {
    display: "inline-block",
    margin: "0 15px"
  };

  render() {
    return (
      <div style={this.stylebtnwrapper}>
        <button style={{ padding: "8px 16px" }} onClick={this.props.onClick}>
          {this.props.val}
        </button>
      </div>
    );
  }
}

export default Button;
