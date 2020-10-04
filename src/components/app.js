import React from "react";
//Import Pages here c:
import AddRecipe from "../pages/add-recipe.js";
import ViewRecipe from "../pages/view-recipe.js";
import Home from "../pages/home";
//Import Header + Footer here

import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import RecipeEditPage from "../pages/recipe-edit-page.js";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path="/ViewRecipe">
          <ViewRecipe />
        </Route>
        <Route path="/AddRecipe">
          {" "}
          <AddRecipe />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/Recipe">
          <RecipeEditPage />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
  //add router information here
}

export default App;
