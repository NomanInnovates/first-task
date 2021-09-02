import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleardataRedux } from "../redux/action/todoAction";
import { getTodos } from "../redux/action/todoAction";
import { deletedataRedux } from '../redux/action/todoAction'

function List() {
  const { todos } = useSelector((state) => state.TodoReducer);
  
  const userId = useSelector(state => state.AuthReducer.user.uid);
  // const user = useSelector((state) => state);
  // console.log()
  const deleteHandler = (id) => {
    dispatch(deletedataRedux(id))
    // console.log("id in foo", id);
  };
  useEffect(() => {
    dispatch(getTodos(userId));
  }, []);
  const dispatch = useDispatch();
  const clearAllHandler = (todos) => {
    dispatch(cleardataRedux(todos));
  };
  // console.log("get todo>", todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
       
        {todos.map((item, i) => {
          return <div className="todo" key={i}>
              <li className="todo-item"> {item.todo} </li>
              <button
                className="complete-btn"
                onClick={() => deleteHandler(item.uid)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ;
        })}
        <div className="todo clearAll">
          <li className="todo-item">
            You have {todos.length} pending task
          </li>
          <button className="clear-btn" onClick={()=>clearAllHandler(todos)}>
            Clear All
          </button>
        </div>
      </ul>
    </div>
  );
}
export default List;
