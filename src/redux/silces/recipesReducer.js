import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: {
    breakfast: [], // Initialize as an empty array for breakfast
    lunch: [], // Initialize as an empty array for lunch
    dinner: [],
  }, // Initial state is an empty array
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      const { breakfast, lunch, dinner } = action.payload;
      state.recipes = {
        breakfast: breakfast || [],
        lunch: lunch || [],
        dinner: dinner || [],
      };
    },
  },
});

// Export the actions
export const { setRecipes } = recipesSlice.actions;

// Export the reducer
export default recipesSlice.reducer;
