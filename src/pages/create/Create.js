import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase/config";
// styles
import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const ingredientInput = useRef(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title,
      ingredients,
      method,
      cookingTime: `${cookingTime}  minutes`,
    };
    try {
      await db.collection("recipes").add(doc);
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  // add ingredients
  const handleAdd = (e) => {
    e.preventDefault();
    // remove the spaces
    const ing = newIngredient.trim();
    // remove the duplicates
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h3 className="page-title">Add a New Recipe</h3>
      <form onSubmit={handleSubmit}>
        {/* Recipe title */}

        <label htmlFor="title">Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />

        {/* Ingredients */}

        <label htmlFor="ingredients">Ingredients</label>
        <div className="ingredients">
          <input
            type="text"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
          />
          <button className="btn" onClick={handleAdd}>
            Add
          </button>
        </div>
        <p className="display-ingredients">
          Current Ingredients :{" "}
          {ingredients.map((ing) => (
            <em key={ing}>{ing}, </em>
          ))}
        </p>

        {/* Method */}

        <label htmlFor="method">Recipe Method</label>
        <textarea
          onChange={(e) => setMethod(e.target.value)}
          value={method}
          required
        />

        {/* Cooking time */}

        <label htmlFor="cookingTime">Cooking Time (minutes):</label>
        <input
          type="number"
          onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
          required
        />

        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default Create;
