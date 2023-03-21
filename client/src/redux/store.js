import thunk from 'redux-thunk';//maneja incertidumbre de promesas
import { createStore, applyMiddleware, compose } from 'redux';
import  rootReducer  from './reducer.js';

 const store = createStore(
    rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default store;