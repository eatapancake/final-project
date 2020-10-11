import React from "react";
//Import Pages here c:
import AddRecipe from "../pages/add-recipe.js";
import ViewRecipe from "../pages/view-recipe.js";
import ViewRecipe2 from "../pages/view-recipe2.js";
import ViewRecipe3 from "../pages/view-recipe3.js";
import Home from "../pages/home";
//Import Header + Footer here

import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecipeEditPage from "../pages/recipe-edit-page.js";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path="/ViewRecipe">
          <ViewRecipe />
        </Route>
        <Route path="/ViewRecipe2">
          <ViewRecipe2 />
        </Route>
        <Route path="/ViewRecipe3">
          <ViewRecipe3 />
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
