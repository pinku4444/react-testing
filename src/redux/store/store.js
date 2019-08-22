import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';


const intialState = {}

const middlewares = [];

const store = createStore(rootReducer,intialState,composeWithDevTools(applyMiddleware(...middlewares)));

export default store;