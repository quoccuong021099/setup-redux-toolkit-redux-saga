import { combineReducers } from "@reduxjs/toolkit";
import pokemonReducer from "../pages/Pokemon/pokemonSlice";

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});
