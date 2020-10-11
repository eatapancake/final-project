import React from "react";
import Header from "../components/header";
import "../CSS/recipes.css";

function ViewRecipe() {
  return (
    <main>
      <Header />
      <h1>CheeseCake</h1>
      {/* Add Image */}
      <h2>Ingredients</h2>
      <ul className="ingredient-list">
        <li>2lbs of strawberries</li>
        <li>5lbs of cheese</li>
        <li>1 whole cake</li>
        <li>A dozen eggs</li>
      </ul>
      <h2>Steps</h2>
      <ul className="steps-list">
        <li>Get Stuff</li>
        <li>Mix everything</li>
        <li>Bake it </li>
        <li>Eat it while it's still hot</li>
      </ul>
    </main>
  );
}

export default ViewRecipe;
