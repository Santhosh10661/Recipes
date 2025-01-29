import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: { favRec: [] },
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // Replace the entire favorites array
    setFavorites: (state, action) => {
      const { favRec } = action.payload;
      state.favorites = { favRec: favRec || [] };
      // state.favorites = [...state.favorites, action.payload];
    },
  },
});

// Export the actions
export const { setFavorites } = favoritesSlice.actions;

// Export the reducer
export default favoritesSlice.reducer;
