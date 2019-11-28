import { fork, all } from "redux-saga/effects";
import fetchProductsWatcher from "./ProductSaga/fetchProductsSaga";

export default function* rootSaga() {
  yield all([fork(fetchProductsWatcher)]);
}
