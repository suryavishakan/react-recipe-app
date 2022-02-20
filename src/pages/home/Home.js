import React, { useEffect, useState } from "react";
// styles
import "./Home.css";

// firestore
import { db } from "../../firebase/config";

// components
import RecipeList from "../../components/RecipeList";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSub = db.collection("recipes").onSnapshot(
      (snapShot) => {
        if (snapShot.empty) {
          setError("No recipes to load");
        } else {
          const results = [];
          snapShot.forEach((document) => {
            results.push({ id: document.id, ...document.data() });
          });
          setData(results);
        }
      },
      (err) => {
        setError(err.message);
      }
    );
    return () => unSub();
  }, []);
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
