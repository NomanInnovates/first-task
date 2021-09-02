import { combineReducers } from "redux";
import TodoReducer from './reducers/todoReducer'
import AuthReducer from './reducers/authReducer'
const rootReducers = combineReducers({
    TodoReducer ,AuthReducer 
})
export default rootReducers