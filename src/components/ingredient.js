import React from "react";

//Might not use as a prop. Not sure yet
function IngredientProp(props) {
  const { amount, name } = props;

  return (
    //Maybe use list instead of <p>
    <p className="ingredient prop">
      {props.amount} of {props.name}
      {/* "5 cups" of "sugar" */}
    </p>
  );
}

export default IngredientProp;
