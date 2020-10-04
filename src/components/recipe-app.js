import React, { useState } from "react";
import { Link } from "react-router-dom";

//reference: https://dev.to/email2vimalraj/dynamic-form-fields-using-react-35ci
function RecipeApp() {
  const [fields, setFields] = useState([{ value: null }]);
  const [fields1, setFields1] = useState([{ value: null }]);

  const [name, setName] = useState("Recipe Title");
  const [ingredientNum, setIngredientNum] = useState(0);

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onButtonClick_1 = () => {
    setIngredientNum(ingredientNum + 1);
  };
  function handleAdd() {
    const values = [...fields];
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
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      alert("Please enter the recipe's name!!");
    }
  };
  return (
    <form className="recipe-form" onSubmit={onFormSubmit}>
      <button>
        <Link to="/">Home</Link>
      </button>
      <input
        className="recipe-form__input"
        type="text"
        id="name"
        value={name}
        onChange={onNameChange}
      />
      <label className="recipe-form__label" htmlFor="questions">
        Ingredients Needed:
      </label>
      {/* <button onClick={onButtonClick_1}>Add Another</button> */}

      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter Ingredient"
              //   onChange={(e) => handleChange(idx, e)}
            />
          </div>
        );
      })}
      <button type="button" onClick={() => handleAdd()}>
        + Ingredient
      </button>
      <label className="recipe-form__label" htmlFor="questions">
        Steps:
      </label>
      {fields1.map((field1, idx) => {
        return (
          <div key={`${field1}-${idx}`}>
            <input
              type="text"
              placeholder="Enter Step"
              //   onChange={(e) => handleChange(idx, e)}
            />
          </div>
        );
      })}
      <button type="button" onClick={() => handleAdd1()}>
        + Step
      </button>

      <button>All Done!!</button>
    </form>
  );
}

export default RecipeApp;
