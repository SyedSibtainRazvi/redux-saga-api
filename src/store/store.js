import createSagaMiddleware from "redux-saga";
// import rootSaga from "../sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import { watcherUserSaga } from "../sagas/handlers/fetchUsers";



const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(watcherUserSaga);

export default store