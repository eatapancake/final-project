import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import Header from "./header";
import { Link } from "react-router-dom";
import "../CSS/recipe-app.css";

//reference: https://dev.to/email2vimalraj/dynamic-form-fields-using-react-35ci
function RecipeApp() {
  // const [fields, setFields] = useLocalStorage("fields", [{ value: null }]);
  const [fields, setFields] = useState([{ value: null }]);
  const [fields1, setFields1] = useState([{ value: null }]);

  //Exports:
  const [name, setName] = useLocalStorage("name", "");
  const [ingredients, setIngredients] = useLocalStorage("ingredients", []);
  const [steps, setSteps] = useLocalStorage("steps", []);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  function test() {
    console.log({ name });
    console.log({ ingredients });
    console.log({ steps });
  }

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);

    console.log(values);
    setIngredients(values);
  }

  function handleAdd() {
    const values = [...fields];
    // const [values, setValues] = useLocalStorage("values", ...fields)
    values.push({ value: null });
    setFields(values);
    const categoriesMarkup = fields.map((field) => (
      <li key={field}>{field}</li>
    ));

    console.log({ categoriesMarkup });
  }

  function handleAdd1() {
    const values = [...fields1];
    values.push({ value: null });
    setFields1(values);
  }

  function handleChange1(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);

    setSteps(values);
  }
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      alert("Please enter the recipe's name!!");
      test();
    }
  };
  const onButtonClick = (event) => {};
  return (
    <form className="recipe-form" onSubmit={onFormSubmit}>
      <Header />
      <input
        className="recipe-form__input"
        type="text"
        id="name"
        value={name}
        onChange={onNameChange}
        placeholder="Enter Recipe Title"
      />
      <div className="recipe-form__label" htmlFor="questions">
        Ingredients Needed:
      </div>
      {/* <button onClick={onButtonClick_1}>Add Another</button> */}
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter Ingredient"
              onChange={(e) => handleChange(idx, e)}
            />
          </div>
        );
      })}
      <button
        className="recipe-app__button__ingredient"
        type="button"
        onClick={() => handleAdd()}
      >
        + Ingredient
      </button>
      <div className="recipe-form__label" htmlFor="questions">
        Steps:
      </div>
      {fields1.map((field1, idx) => {
        return (
          <div key={`${field1}-${idx}`}>
            <input
              type="text"
              placeholder="Enter Steps"
              onChange={(e) => handleChange1(idx, e)}
            />
          </div>
        );
      })}
      <button
        className="recipe-app__button__steps"
        type="button"
        onClick={() => handleAdd1()}
      >
        + Step
      </button>
      <button onClick={onButtonClick}>
        <Link to="/">All Done!!</Link>
      </button>
    </form>
  );
}

export default RecipeApp;
