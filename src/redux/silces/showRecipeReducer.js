import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRecipe: {
    itsShow: false,
    id: null,
  }, // Initial state is an empty array
};

export const showRecipeSlice = createSlice({
  name: "showRecipe",
  initialState,
  reducers: {
    setShowRecipe: (state, action) => {
      const { itsShow, id } = action.payload;
      state.showRecipe = {
        itsShow: itsShow,
        id: id,
      };
    },
  },
});

// Export the actions
export const { setShowRecipe } = showRecipeSlice.actions;

// Export the reducer
export default showRecipeSlice.reducer;
