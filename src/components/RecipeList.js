import React from "react";

import { Link } from "react-router-dom";
import { useTheme } from "./../hooks/useTheme";

// styles
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();
  if (recipes.length === 0) {
    return (
      <div className="error">
        <h4>Oops!....No recipes to load</h4>
      </div>
    );
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>Cooking Time - {recipe.cookingTime}</p>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
