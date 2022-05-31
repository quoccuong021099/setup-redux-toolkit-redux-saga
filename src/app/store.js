import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";
/**
 * Config redux toolkit with saga here
 * https://viblo.asia/p/redux-toolkit-redux-saga-Ljy5VPAVZra
 */

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export default configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);
