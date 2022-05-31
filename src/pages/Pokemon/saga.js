import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getPokemon,
  getPokemonSuccess,
  getPokemonFailure,
} from "./pokemonSlice";

function* getAllPokemon() {
  try {
    const res = yield axios.get("https://pokeapi.co/api/v2/pokemon");
    yield put(getPokemonSuccess(res.data));
  } catch (error) {
    yield put(getPokemonFailure(error));
  }
}

export default function* pokemonSaga() {
  yield all([takeLatest(getPokemon, getAllPokemon)]);
}
