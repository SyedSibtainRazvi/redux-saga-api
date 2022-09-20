import { all } from "redux-saga/effects";
import watcherUserSaga from "../sagas/fetchData";

export default function* rootSaga() {
    yield all([watcherUserSaga()]);
}