import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();

  const { data: recipe, error } = useFetch(
    `http://localhost:3000/recipes/${id}`
  );

  return (
    <div className="recipe">
      {error && (
        <div className="error">
          <h2>404Error</h2>
          <p>{error}</p>
        </div>
      )}
      {recipe && (
        <>
          <h3 className="page-title">{recipe.title}</h3>
          <h4>Cooking Time - {recipe.cookingTime}</h4>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
