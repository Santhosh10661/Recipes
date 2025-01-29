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
    <div className="favorites row">
      <h2 className="col-12">Your Favorites</h2>

      {favList.length > 0 ? (
        <>
          {favList.map((fav, index) => {
            return <RecipeCard key={fav.recipe_id} recipe={fav} />;
          })}
        </>
      ) : (
        <p>No favorites added yet!</p>
      )}
    </div>
  );
};

export default Favorites;
