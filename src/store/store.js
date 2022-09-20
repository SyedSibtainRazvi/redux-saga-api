import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import reducers from "../reducers";



const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);