import React from "react";

function IngredientProp(props) {
  const { descriptions } = props;
  const descriptionsMarkUp = [];
  for (const description of descriptions) {
    descriptionsMarkUp.push(<li key={description}>{description}</li>);
  }
  return <ul>{descriptionsMarkUp}</ul>;

  // const descriptionsMarkUp = descriptions.map((description) => {
  //   return <li key={description}>{description}</li>;
  // });

  // return (
  // //Maybe use list instead of <p>
  // <p className="ingredient prop">
  //   {props.amount} of {props.name}
  //   {/* "5 cups" of "sugar" */}
  // </p>
}

export default IngredientProp;
