import { setRecipes } from "../redux/silces/recipesReducer";
import axios from "axios";

export const FetchRecipes = async (loadingis, setLoadingIs, dispatch) => {
  // const API_URL = `https://api.edamam.com/search?q=pizza&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50`;

  const API_HEADER = {
    headers: {
      "Edamam-Account-User": "your-user-id-here", // Replace with your actual user ID
    },
  };
  const API_URL_BREAKFAST = `https://api.edamam.com/search?q=breakfast&app_id=128f27b0&app_key=6c7f79e15055768d30f8f5952d7c0e5d&from=0&to=50`;
  const API_URL_LUNCH = `https://api.edamam.com/search?q=lunch&app_id=128f27b0&app_key=6c7f79e15055768d30f8f5952d7c0e5d&from=0&to=50`;
  const API_URL_DINNER = `https://api.edamam.com/search?q=dinner&app_id=128f27b0&app_key=6c7f79e15055768d30f8f5952d7c0e5d&from=0&to=50`;

  try {
    const responseBF = await axios.get(API_URL_BREAKFAST, API_HEADER);
    const responseL = await axios.get(API_URL_LUNCH, API_HEADER);
    const responseD = await axios.get(API_URL_DINNER, API_HEADER);

    const recipes_BF = responseBF.data.hits.map((hit) => {
      const recipeData = hit.recipe;
      const recipe_id = recipeData.uri.split("#")[1];
      return { ...recipeData, recipe_id };
    });
    const recipes_L = responseL.data.hits.map((hit) => {
      const recipeData = hit.recipe;
      const recipe_id = recipeData.uri.split("#")[1];
      return { ...recipeData, recipe_id };
    });
    const recipes_D = responseD.data.hits.map((hit) => {
      const recipeData = hit.recipe;
      const recipe_id = recipeData.uri.split("#")[1];
      return { ...recipeData, recipe_id };
    });

    const res = {
      breakfast: recipes_BF,
      lunch: recipes_L,
      dinner: recipes_D,
    };
    sessionStorage.setItem("recipes", JSON.stringify(res));
    dispatch(setRecipes(res));
    setLoadingIs(false);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    setLoadingIs(false);
  }
};
