import React from "react";
import { useSelector } from "react-redux";
import RecipeList from "./RecipeList";

const DinnerList = () => {
  const recipe = useSelector((state) => state.recipes.recipes);

  return <RecipeList title={"dinner"} recipeType={recipe.dinner} />;
};

export default DinnerList;
