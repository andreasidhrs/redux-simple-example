import { ADD_TODO, REMOVE_TODO } from './../constants/action-types';

const initialState = {
  todos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: state.todos.concat(action.payload) };
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter(todo => action.payload !== todo) };
    default:
      return state;
  }
};

export default rootReducer;