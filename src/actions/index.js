import { ADD_TODO, REMOVE_TODO } from './../constants/action-types';

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo
});

export const removeTodo = todo => ({
    type: REMOVE_TODO,
    payload: todo
});