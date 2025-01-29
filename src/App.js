import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import { FetchRecipes } from "./components/FetchRecipes";
import { setRecipes } from "./redux/silces/recipesReducer";
import { setFavorites } from "./redux/silces/favoritesReducer";
import RecipeDetails from "./components/RecipeDetails";
import Loading from "./components/Loading";

const App = () => {
  const showRecipe = useSelector((state) => state.showRecipe.showRecipe);
  const [loadingis, setLoadingIs] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const SS_Data = JSON.parse(sessionStorage.getItem("recipes")); //checking already data in session storage
    const SS_FavRec = JSON.parse(sessionStorage.getItem("favorites")); //checking already have any favRec data in session storage
    if (SS_Data) {
      dispatch(setRecipes(SS_Data));
      if (SS_FavRec) {
        dispatch(setFavorites(SS_FavRec));
      }
      setLoadingIs(false);
    } else {
      FetchRecipes(loadingis, setLoadingIs, dispatch);
    }
  }, [dispatch, loadingis]);

  return (
    <Router>
      <div
        className="app"
        style={{
          maxHeight: showRecipe.itsShow ? "100dvh" : "",
          overflow: showRecipe.itsShow ? "hidden" : "",
        }}
      >
        {!loadingis ? (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes/*" element={<Recipes />} />
            </Routes>
          </>
        ) : (
          <Loading />
        )}

        {showRecipe.itsShow && <RecipeDetails />}
      </div>
    </Router>
  );
};

export default App;
