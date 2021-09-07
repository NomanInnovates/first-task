import {
  DELETE_TODO,
  ADD_TODO,
  CLEAR_ALL,
  FETCH_TODO,
} from "../constants/types";

let initialState = {
  todos: [],
};

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        todos: action.payload,
      };

    case ADD_TODO:
      return state;

    case DELETE_TODO:
      return state;
    case CLEAR_ALL:
      let empState = [];
      return empState;

    default:
      return state;
  }
}
export default TodoReducer;
