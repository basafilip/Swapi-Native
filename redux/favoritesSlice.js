import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite(state, action) {
      const character = action.payload;
      const alreadyExists = state.find(item => item.name === character.name);
      if(!alreadyExists) {
        state.push(character);
      }
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;