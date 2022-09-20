import { createStore, applyMiddleware } from "redux";
import users from "../reducers/user";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";



const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];

export const store = createStore(users, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);