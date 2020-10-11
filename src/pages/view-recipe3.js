import React from "react";
import Header from "../components/header";
import "../CSS/recipes.css";

function ViewRecipe3() {
  return (
    <main>
      <Header />
      <h1>Chocolate Waffles</h1>
      {/* Add Image */}
      <h2>Ingredients</h2>
      <ul lassName="ingredient-list">
        <li>1 cup of chocolate</li>
        <li>3 cups of waffle mix</li>
        <li>2 large whole eggs </li>
        <li>2 cups of milk</li>
        <li>2tbs of oil</li>
      </ul>
      <h2 className="steps-list">Steps</h2>
      <ul>
        <li>1. Get Stuff</li>
        <li>2. Mix everything</li>
        <li>3. Cook it </li>
        <li>4. Eat it while it's still hot</li>
      </ul>
    </main>
  );
}

export default ViewRecipe3;
