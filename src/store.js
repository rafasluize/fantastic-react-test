import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { deviceReducer } from './reducers/deviceReducer';

const reducers = combineReducers({ 
  deviceReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;