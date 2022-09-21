import { call, put, takeEvery } from "redux-saga/effects";
import fetchGetUsers from "../requests/fetchApiData";

function* handleGetUsers() {
    try {
        const users = yield call(fetchGetUsers)
        console.log(users);
        yield put({ type: "GET_USERS_SUCCESS", users: users });
    } catch (err) {
        yield put({ type: "GET_USERS_FAILED", message: err.message });
    }
}

function* watcherUserSaga(){
    yield takeEvery("GET_USERS_REQUESTED", handleGetUsers)
}

export default watcherUserSaga