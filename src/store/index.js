import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "../reducers/index";
import countReducer from '../reducers/counter';
import { addTodo } from "../actions";
import logger from './../middlewares/logger';
import { composeWithDevTools } from 'remote-redux-devtools';

const reducers = combineReducers({
    todo: rootReducer,
    counter: countReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger)));

/*fetch('https://jsonplaceholder.typicode.com/todos')
.then( res => res.json())
.then( posts => store.dispatch( addTodo(posts) ));*/

export default store;