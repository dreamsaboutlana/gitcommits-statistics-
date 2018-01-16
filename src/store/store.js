import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combineReducers from '../reducers';

const middleware = applyMiddleware(thunk);

export default function configureStore(initState) {
  const store = createStore(combineReducers, initState, middleware);
  return store;
}
