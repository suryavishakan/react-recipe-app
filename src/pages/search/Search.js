import React from "react";
import { useLocation } from "react-router-dom";
// styles
import "./Search.css";
import { useFetch } from "./../../hooks/useFetch";
// components
import RecipeList from "../../components/RecipeList";

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = `http://localhost:3000/recipes?q=${query}`;
  const { data, error } = useFetch(url);

  return (
    <div>
      <h3 className="page-title">Recipes including "{query}"</h3>
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

export default Search;
