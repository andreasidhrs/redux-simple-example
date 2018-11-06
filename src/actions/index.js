import { ADD_TODO, REMOVE_TODO, COUNTER_INC, COUNTER_DEC } from './../constants/action-types';

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo
});

export const removeTodo = todo => ({
    type: REMOVE_TODO,
    payload: todo
});

export const counterInc = () => ({
    type: COUNTER_INC,
    payload: null
});

export const counterDec = () => ({
    type: COUNTER_DEC,
    payload: null
});