import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";



const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store