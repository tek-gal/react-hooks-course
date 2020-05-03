import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

export default function(state, action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
}
