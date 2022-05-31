import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPokemon: {
    data: [],
    meta: { total: 0 },
    isLoading: false,
    isSuccess: false,
  },
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemon: (state) => {
      state.listPokemon.isLoading = true;
      state.listPokemon.isSuccess = false;
    },
    getPokemonSuccess: (state, action) => {
      state.listPokemon.data = action.payload.results;
      state.listPokemon.meta.total = action.payload.count;
      state.listPokemon.isLoading = false;
      state.listPokemon.isSuccess = true;
    },
    getPokemonFailure: (state) => {
      state.listPokemon.isSuccess = false;
      state.listPokemon.isLoading = false;
    },
  },
});
// selector
export const selectPokemonList = (state) => state.pokemon.listPokemon;

export const { getPokemon, getPokemonSuccess, getPokemonFailure } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
