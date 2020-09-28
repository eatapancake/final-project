import React from "react";
import IngredientProp from "./ingredient.js";
import Ingredient from "./ingredient.js";

//Find out hoe inventory works in js
function Recipe() {
  return (
    <div>
      <IngredientProp amount="5 cups" name="sugar"></IngredientProp>
    </div>
  );
}

export default Recipe();
