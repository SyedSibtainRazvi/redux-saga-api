import { call, put, take, fork, cancel, takeEvery, cancelled, delay } from "redux-saga/effects";
import fetchGetUsers from "../requests/fetchApiData";

function* handleGetUsers() {
    while (true)
        try {
            const users = yield call(fetchGetUsers)
            yield delay(4000)
            console.log(users);
            yield put({ type: "GET_USERS_SUCCESS", users: users });
        } finally {
            if (yield cancelled()) {
            }
        }
}

function* watcherUserSaga() {
    while (yield take('GET_USERS_REQUESTED')) {
        // starts the task in the background
        const handleGetUsersCheck = yield fork(handleGetUsers)

        // wait for the user stop action
        yield take('GET_USERS_FAILED')
        // user clicked stop. cancel the background task
        // this will cause the forked bgSync task to jump into its finally block
        yield cancel(handleGetUsersCheck)
    }
}

// function* watcherUserSaga() {
//     yield takeEvery("GET_USERS_REQUESTED", handleGetUsers)
// }
export default watcherUserSaga