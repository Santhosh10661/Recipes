import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowRecipe } from "../redux/silces/showRecipeReducer";
import { setFavorites } from "../redux/silces/favoritesReducer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RecipeDetails = () => {
  const id = useSelector((state) => state.showRecipe.showRecipe.id);
  const recipes = useSelector((state) => state.recipes.recipes);
  const [recipeSelected, setRecipeSelected] = useState(null);
  const [loadingIs, setLoadingIs] = useState(true);
  const favorites = useSelector((state) => state.favorites.favorites);
  const [isFavRec, setIsFavRec] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedRec = Object.values(recipes)
      .flat()
      .find((rec) => rec.recipe_id === id);

    if (selectedRec) {
      setRecipeSelected(selectedRec);
      setLoadingIs(false);
    } else {
      setLoadingIs(false);
    }

    const itsFav = favorites.favRec.filter((fav) => id === fav);
    setIsFavRec(itsFav.length > 0 ? true : false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFavorite = (favRec) => {
    if (isFavRec === true) {
      setIsFavRec(false);
      const newFavList = {
        favRec: favorites.favRec.filter((fav) => fav !== favRec.recipe_id),
      };

      dispatch(setFavorites(newFavList));
      sessionStorage.setItem("favorites", JSON.stringify(newFavList));
    } else {
      setIsFavRec(true);

      const newFavList = {
        favRec: [...favorites.favRec, favRec.recipe_id],
      };

      dispatch(setFavorites(newFavList));
      sessionStorage.setItem("favorites", JSON.stringify(newFavList));
    }
  };

  const handleRecipeClose = () => {
    const shoewRecipe = { itsShow: false, id: null };
    dispatch(setShowRecipe(shoewRecipe));
  };

  return (
    <section className="container-fluid recDetCon">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100dvh" }}
      >
        {loadingIs ? (
          <h1>loading.....</h1>
        ) : (
          <div
            className="col-11 col-md-6 recipeDetails rounded shadow p-2 d-flex flex-column justify-content-center align-items-center"
            style={{ height: "fit-content", position: "relative" }}
          >
            <div
              className="text-green fs-5"
              style={{
                position: "absolute",
                top: "-7%",
                right: "-3%",
                fontWeight: "700",
              }}
            >
              <i
                className="bi bi-x-circle-fill"
                onClick={() => handleRecipeClose()}
              ></i>
            </div>
            {recipeSelected ? (
              <>
                <h3
                  className="text-center text-capitalize bg-lightGreen text-green rounded m-0 p-1 px-3"
                  style={{ width: "fit-content" }}
                >
                  {recipeSelected.label}
                </h3>
                <div className="col-12 d-flex flex-column bg-lightGreen p-2 rounded my-4 mx-1">
                  <div
                    className="col-12 d-flex justify-content-between align-items-center"
                    style={{ borderBottom: "2px dashed #5cb338" }}
                  >
                    <h3 className="text-green" style={{ width: "fit-content" }}>
                      Recipe Details
                    </h3>
                    <FavIcon
                      handleFavorite={handleFavorite}
                      isFavRec={isFavRec}
                      recipeSelected={recipeSelected}
                    />
                  </div>
                  <div
                    className="col-12 d-flex align-items-center justify-content-between"
                    style={{
                      position: "relative",
                      borderBottom: "2px dashed #5cb338",
                    }}
                  >
                    <div
                      className="col-4 rounded-circle overflow-hidden"
                      style={{
                        width: "150px",
                        height: "150px",
                        transform: "scale(0.8)",
                      }}
                    >
                      <LazyLoadImage
                        src={recipeSelected.image}
                        alt=""
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>

                    <div className="col d-flex justify-content-center align-items-center recDetPoint">
                      <div className="d-flex flex-column">
                        <span className="point">
                          Dish Type : {recipeSelected.dishType}
                        </span>
                        <span className="point">
                          Cuisine Type : {recipeSelected.cuisineType}
                        </span>
                        <span className="point">
                          Calories:
                          {Math.round(
                            parseFloat(recipeSelected.calories) * 100
                          ) / 100}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 d-flex justify-content-center align-items-center flex-column my-2 ">
                    <h5
                      className="p-1 rounded text-center bg-green text-capitalize p-1 px-4"
                      style={{ width: "fit-content" }}
                    >
                      ingredient
                    </h5>

                    <div className="my-2 p-0 w-100">
                      {recipeSelected.ingredientLines.map((ingre, index) => {
                        return (
                          <span
                            className="text-green mx-1 text-capitalize"
                            style={{
                              fontWeight: "700",
                            }}
                            key={index}
                          >
                            <i className="bi bi-check2-circle mx-1 "></i>
                            {ingre}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <IngreList recipeSelected={recipeSelected} />
                </div>
              </>
            ) : (
              <h1>not found</h1>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const IngreList = (props) => {
  const { recipeSelected } = props;
  const list = recipeSelected.healthLabels.slice(0, 6);

  return (
    <ul
      className="row p-1 justify-content-center m-0"
      style={{ listStyle: "none" }}
    >
      {list.map((label, index) => {
        return (
          <li
            className="col-2 m-1 rounded-pill text-green bg-lightGreen"
            style={{ width: "fit-content", fontWeight: "600" }}
            key={index}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
};

const FavIcon = (props) => {
  const { isFavRec, handleFavorite, recipeSelected } = props;
  return (
    <div
      className="card-favIcon"
      style={{
        width: "fit-content",
        // position: "absolute",
        // top: "0%",
        // right: "0%",
        // transform: "translate(-5%,-5%)",
      }}
      onClick={() => handleFavorite(recipeSelected)}
    >
      {isFavRec === true ? (
        <i className="bi bi-heart-fill text-green"></i>
      ) : (
        <i className="bi bi-heart text-green"></i>
      )}
    </div>
  );
};
export default RecipeDetails;
