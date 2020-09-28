import React from "react";

function StepProp(props) {
  const { number, description } = props;
  return (
    <p className="step-prop">
      {props.number} {props.description}
    </p>
  );
}

export default StepProp;
