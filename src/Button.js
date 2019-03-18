import React from "react";

const Button = props => {
  const stylebtnwrapper = {
    display: "inline-block",
    margin: "0 15px"
  };
  return (
    <div style={stylebtnwrapper}>
      <button style={{ padding: "8px 16px" }} onClick={props.onClick}>
        {props.val}
      </button>
    </div>
  );
};

export default Button;
