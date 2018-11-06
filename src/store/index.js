import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { addTodo } from "../actions";

const store = createStore(rootReducer);

/*fetch('https://jsonplaceholder.typicode.com/todos')
.then( res => res.json())
.then( posts => store.dispatch( addTodo(posts) ));*/

export default store;