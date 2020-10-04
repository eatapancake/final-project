import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Recipe Book
      <div>
        <Link to="/ViewRecipe">Recipe #1</Link>{" "}
      </div>
      <button>
        <Link to="/Recipe">Add New Recipe</Link>
      </button>
    </div>
  );
}

export default Home;
