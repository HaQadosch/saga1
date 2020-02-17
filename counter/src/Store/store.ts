import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { rootReducer } from "./rootReducer"
import createSagaMiddleware from "redux-saga"
import { helloSaga } from "../saga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(helloSaga)

export type AppDispatch = typeof store.dispatch
