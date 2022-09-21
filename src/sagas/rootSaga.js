import { all } from "redux-saga/effects";
import watcherUserSaga from "../sagas/fetchApiData";

export default function* rootSaga() {
    yield all([watcherUserSaga()]);
}