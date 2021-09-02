import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleardataRedux } from "../redux/action/todoAction";
import { getTodos } from "../redux/action/todoAction";
import { deletedataRedux } from '../redux/action/todoAction'

function List() {
  const { todos } = useSelector((state) => state.TodoReducer);
  console.log("todo form redux in todolist", todos);
  const deleteHandler = (id) => {
    dispatch(deletedataRedux(id))
    // console.log("id in foo", id);
  };
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  const dispatch = useDispatch();
  const clearAllHandler = (todos) => {
    dispatch(cleardataRedux(todos));
  };
  console.log("get todo>", todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
{console.log("in return",todos)}
       
        {todos.map((item, i) => {
          console.log("single todo", item.todo);
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
