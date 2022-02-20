import React from "react";

import { Link } from "react-router-dom";
import { useTheme } from "./../hooks/useTheme";
// firestore
import { db } from "../firebase/config";
// styles
import "./RecipeList.css";
// icon
import deleteIcon from "../assets/delete.svg";

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();
  if (recipes.length === 0) {
    return (
      <div className="error">
        <h4>Oops!....No recipes to load</h4>
      </div>
    );
  }

  const handleDelete = (id) => {
    db.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>Cooking Time - {recipe.cookingTime}</p>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
          <img
            src={deleteIcon}
            alt="delete card"
            className="delete"
            onClick={() => handleDelete(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
