import React from "react";
import Header from "../components/header";

const recipeName = JSON.parse(localStorage.getItem("name"));
// const test = useLocalStorage.call('name')
const ingredients = localStorage.getItem("ingredients");
const steps = localStorage.getItem("steps");

// const ingredientsMarkup = [];
// for (const ingredient of ingredients) {
//   ingredientsMarkup.push(<li key={ingredient}>{ingredient}</li>);
// }

function AddRecipe() {
  return (
    <main>
      <Header />
      <h1>{recipeName}</h1>
      {/* Add Image */}
      <h2>Ingredients</h2>
      <ul>
        <il>{ingredients}</il>
      </ul>
      <h2>Steps</h2>
      <ul>
        <il>{steps}</il>
      </ul>
    </main>
  );
}

export default AddRecipe;
