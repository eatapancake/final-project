import React from "react";

function ViewRecipe() {
  return (
    <main>
      <h1>CheeseCake</h1>
      {/* Add Image */}
      <h2>Ingredients</h2>
      <ul>
        <li>strawberries</li>
        <li>cheese</li>
        <li>cake</li>
        <li>eggs</li>
      </ul>
      <h2>Steps</h2>
      <ul>
        <li>1. Get Stuff</li>
        <li>2. Mix everything</li>
        <li>3. Bake it </li>
        <li>4. Eat it while it's still hot</li>
      </ul>
    </main>
  );
}

export default ViewRecipe;
