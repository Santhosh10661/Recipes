import React from "react";
import { useSelector } from "react-redux";
import RecipeList from "./RecipeList";

const LunchList = () => {
  const recipe = useSelector((state) => state.recipes.recipes);

  return <RecipeList title={"lunch"} recipeType={recipe.lunch} />;
};

export default LunchList;
