import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

function Home() {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <Link to="/ViewRecipe">Strawberry Cheesecake</Link>
        </li>
        <li>
          <Link to="/ViewRecipe2">Blueberry Pancake</Link>
        </li>
        <li>
          <Link to="/ViewRecipe3">Chocolate Waffle</Link>
        </li>
        <li>
          <Link to="/AddRecipe">My Custom Recipe!</Link>
        </li>
      </ul>
      <div> </div>
      <button>
        <Link to="/Recipe">Add New Recipe</Link>
      </button>
    </div>
  );
}

export default Home;
