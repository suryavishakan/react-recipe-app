import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { db } from "../../firebase/config";
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSub = db
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setRecipe(doc.data());
        } else {
          setError("Couldn't find the recipe");
        }
      });
    return () => unSub();
  }, [id]);

  // const handleEdit = () => {
  //   db.collection("recipes").doc(id).update({
  //     title: "Banana Smoothie",
  //   });
  // };

  return (
    <div className={`recipe ${mode}`}>
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
          {/* <button onClick={handleEdit}>Update me</button> */}
        </>
      )}
    </div>
  );
};

export default Recipe;
