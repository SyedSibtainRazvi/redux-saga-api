import { createStore, applyMiddleware, compose } from "redux";
import users from "../reducers/user";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";



const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = compose(
  applyMiddleware(...middleware),
)(createStore)(users);

sagaMiddleware.run(rootSaga);