import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RecipeDetails = () => {
  const id = useSelector((state) => state.showRecipe.showRecipe.id);
  const recipes = useSelector((state) => state.recipes.recipes);
  const [recipeSelected, setRecipeSelected] = useState(null);
  const [loadingIs, setLoadingIs] = useState(true);

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
  }, [id, recipeSelected, recipes]);

  console.log(recipeSelected);

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
            style={{ height: "fit-content" }}
          >
            {recipeSelected ? (
              <>
                <h3
                  className="text-center text-capitalize bg-lightGreen text-green rounded m-0 p-1 px-3"
                  style={{ width: "fit-content" }}
                >
                  {recipeSelected.label}
                </h3>
                <div className="row bg-lightGreen p-2 rounded my-4 mx-1">
                  <div
                    className="col-12 d-flex align-items-center justify-content-between"
                    style={{ borderBottom: "2px dashed #5cb338" }}
                  >
                    <div
                      className="col-4 rounded-circle overflow-hidden"
                      style={{
                        width: "150px",
                        height: "150px",
                        transform: "scale(0.8)",
                      }}
                    >
                      <img
                        src={recipeSelected.image}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-8 d-flex justify-content-center align-items-center flex-column">
                      <h5
                        className="p-1 rounded-pill text-center bg-green text-capitalize p-1 px-4"
                        style={{ width: "fit-content" }}
                      >
                        ingredient
                      </h5>
                      <ul className="row p-0">
                        {recipeSelected.ingredientLines.map((ingre, index) => {
                          return (
                            <li
                              className="d-flex text-green text-capitalize"
                              style={{
                                width: "fit-content",
                                fontWeight: "600",
                              }}
                              key={index}
                            >
                              <i className="bi bi-check2-circle mx-1"></i>
                              {ingre}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <span>{recipeSelected.dishType}</span>
                    <span>{recipeSelected.dishType}</span>
                    <span>{recipeSelected.dishType}</span>
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
      className="row p-1 justify-content-center"
      style={{ listStyle: "none" }}
    >
      {list.map((label, index) => {
        return (
          <li
            className="col-2 m-1 rounded-pill text-green bg-lightGreen"
            style={{ width: "fit-content", fontWeight: "600" }}
            key={index}
          >
            {/* <i className="bi bi-dot"></i> */}
            {label}
          </li>
        );
      })}
    </ul>
  );
};

export default RecipeDetails;
