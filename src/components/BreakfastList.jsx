import React from "react";
import { useSelector } from "react-redux";
import RecipeList from "./RecipeList";

const BreakfastList = () => {
  const recipe = useSelector((state) => state.recipes.recipes);

  return <RecipeList title={"breakfast"} recipeType={recipe.breakfast} />;
};

export default BreakfastList;
