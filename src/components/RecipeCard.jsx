import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../redux/silces/favoritesReducer";
import { setShowRecipe } from "../redux/silces/showRecipeReducer";

const RecipeCard = (props) => {
  const { recipe, index } = props;
  const favorites = useSelector((state) => state.favorites.favorites);
  const [isFavRec, setIsFavRec] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const itsFav = favorites.favRec.filter(
      (fav) => recipe.recipe_id === fav.recipe_id
    );
    setIsFavRec(itsFav.length > 0 ? true : false);
  }, [favorites.favRec, recipe.recipe_id]);

  const handleFavorite = (favRec) => {
    if (isFavRec === true) {
      setIsFavRec(false);
      const newFavList = {
        favRec: favorites.favRec.filter(
          (fav) => fav.recipe_id !== favRec.recipe_id
        ),
      };
      dispatch(setFavorites(newFavList));
      sessionStorage.setItem("favorites", JSON.stringify(newFavList));
    } else {
      setIsFavRec(true);
      const newFavList = {
        favRec: [...favorites.favRec, favRec],
      };
      dispatch(setFavorites(newFavList));
      sessionStorage.setItem("favorites", JSON.stringify(newFavList));
    }
  };

  const handleOpenRecipe = (id) => {
    const shoewRecipe = { itsShow: true, id: id };
    dispatch(setShowRecipe(shoewRecipe));
  };

  return (
    <div
      className="col-11 col-sm-5 col-md-3 col-lg-2 shadow-sm rounded p-1 p-md-3 m-2 my-2 my-md-4 recipe-card"
      // className={`${
      //   index % 2 === 0
      //     // ? "col-11 col-sm-5 col-md-4"
      //     // : "col-11 col-sm-5 col-md-3"
      // } shadow-sm rounded p-1 p-md-3 m-2 my-2 my-md-4 recipe-card`}
      style={{ height: "fit-content" }}
    >
      <button onClick={() => handleOpenRecipe(recipe.recipe_id)}>open</button>
      <div className="card-favIcon" onClick={() => handleFavorite(recipe)}>
        {isFavRec === true ? (
          <i className="bi bi-heart-fill"></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </div>
      <div className="col-12 d-flex flex-row flex-md-column justify-content-around align-items-center mb-4">
        <div className="rc-img-con rounded-circle m-2">
          <img src={recipe.image} alt={recipe.label} />
        </div>
        <h6
          className="text-center col-7 col-md-12 text-truncate rounded-pill p-2 m-0 mb-md-1"
          style={{
            height: "fit-content",
            backgroundColor: "#fbfffb",
            color: "#5cb338",
            fontWeight: "700",
          }}
        >
          {recipe.label}
        </h6>
      </div>
      <span
        className="col-12 text-center bg-green m-0 p-1 text-capitalize text-truncate"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "0%",
          fontWeight: "700",
        }}
      >
        {recipe.dishType ? recipe.dishType[0] : "not found"}
      </span>
    </div>
  );
};

export default RecipeCard;
