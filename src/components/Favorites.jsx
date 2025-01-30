import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const recipes = useSelector((state) => state.recipes.recipes);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const favItemsList = Object.values(recipes)
      .flat()
      .filter((rec) => favorites.favRec.includes(rec.recipe_id));

    setFavList(favItemsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);
  return (
    <div className="favorites row" style={{ minHeight: "100dvh" }}>
      {favList.length > 0 ? (
        <div className="col-12">
          <h2 className="col-12" style={{ height: "fit-content" }}>
            Your Favorites
          </h2>
          <div className="row justify-content-evenly">
            {favList.map((fav) => {
              return <RecipeCard key={fav.recipe_id} recipe={fav} />;
            })}
          </div>
        </div>
      ) : (
        <div className="noFav">
          <i class="bi bi-heartbreak"></i>
          <p>No favorites added yet!</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
