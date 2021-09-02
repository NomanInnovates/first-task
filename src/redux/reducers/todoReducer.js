import { DELETE_TODO, ADD_TODO, CLEAR_ALL, FETCH_TODO } from "../constants/types";

let initialState = {
  todos: []
}


function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO:
      return  {
        ...state,
        todos: action.payload
      }
      
    case ADD_TODO:
      return state;
        // {
        //   todo: action.payload,
        //   completed: false,
        //   uid: Date.now().toString(36) + Math.random().toString(36).substr(2),
        // },

      
    case DELETE_TODO:
    console.log("id in reducer dell case",action.payload)
      return state;
    case CLEAR_ALL:
      console.log("Clear All in redu")
      let empState = [];
      return empState;

    default:
      return state;
  }
}
export default TodoReducer;
