import { all } from "redux-saga/effects";
import pokemonSaga from "../pages/Pokemon/saga";

export function* rootSaga() {
  yield all([pokemonSaga()]);
}
