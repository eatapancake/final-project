import React, { useState } from "react";
//HOOK
function AddRecipe() {
  //instead of string, maybe try adding doing ingredient as a prop?
  const [ingredient, setIngredient] = useState("");
  const onIngredientInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setIngredient(value);
  };

  return (
    <main>
      <div>
        <input
          type="text"
          value={ingredient}
          onChange={onIngredientInputChange}
        />
      </div>
      <button>Add ingredient</button>
      {/* <button onClick={onbuttonClick}>Cancel</button>
      <button onClick={onbuttonClick}>Submit</button> */}
    </main>
  );
}

export default AddRecipe;
