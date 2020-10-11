import React from "react";
import Header from "../components/header";
import "../CSS/recipes.css";

function ViewRecipe2() {
  return (
    <main>
      <Header />
      <h1>Blueberry Pancakes</h1>
      {/* Add Image */}
      <h2>Ingredients</h2>
      <ul className="ingredient-list">
        <li>1 cup of blueberries</li>
        <li>3 cups of pancake mix</li>
        <li>2 large whole eggs </li>
        <li>2 cups of milk</li>
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

export default ViewRecipe2;
