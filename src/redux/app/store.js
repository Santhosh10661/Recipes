import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../silces/recipesReducer";
import favoritesReducer from "../silces/favoritesReducer";
import showRecipeReducer from "../silces/showRecipeReducer";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesReducer,
    showRecipe: showRecipeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable check middleware
    }),
});

export default store;
