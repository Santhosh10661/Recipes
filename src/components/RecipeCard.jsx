import React from "react";
import { useDispatch } from "react-redux";
import { setShowRecipe } from "../redux/silces/showRecipeReducer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

const RecipeCard = (props) => {
  const { recipe } = props;

  const dispatch = useDispatch();

  const handleOpenRecipe = (id) => {
    const shoewRecipe = { itsShow: true, id: id };
    dispatch(setShowRecipe(shoewRecipe));
  };

  return (
    <div
      className="col-10 col-sm-5 col-md-3 col-lg-2 shadow-sm rounded p-1 p-md-3 m-2 my-2 my-md-4 recipe-card"
      style={{ height: "fit-content", position: "relative" }}
      onClick={() => handleOpenRecipe(recipe.recipe_id)}
    >
      <div className="col-12 d-flex flex-row flex-md-column justify-content-around align-items-center mb-4">
        <div className="rc-img-con rounded-circle m-2">
          <LazyLoadImage src={recipe.image} alt={recipe.label} effect="blur" />
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
