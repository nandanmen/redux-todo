import { ADD_TODO, TOGGLE_TODO } from './actionTypes';

let nextTodoID = 0;

export function addTodo(content) {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoID,
      content
    }
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
}
