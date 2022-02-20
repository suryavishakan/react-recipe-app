import React from "react";
// styles
import "./Home.css";
// hooks
import { useFetch } from "../../hooks/useFetch";
// components
import RecipeList from "../../components/RecipeList";

const Home = () => {
  const { data, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && (
        <div className="error">
          <h2>404Error</h2>
          <p>{error}</p>
        </div>
      )}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
