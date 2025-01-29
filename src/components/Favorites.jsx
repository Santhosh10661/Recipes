import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>

      {favorites.favRec.length > 0 ? (
        favorites.favRec.map((fav) => (
          <div className="favorite-card" key={fav.recipe_id}>
            <img src={fav.image} alt={fav.label} />
            <p>{fav.label}</p>
          </div>
        ))
      ) : (
        <p>No favorites added yet!</p>
      )}
    </div>
  );
};

export default Favorites;
