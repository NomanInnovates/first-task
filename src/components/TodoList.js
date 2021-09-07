import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleardataRedux } from "../redux/action/todoAction";
import { getTodos } from "../redux/action/todoAction";
import { deletedataRedux } from "../redux/action/todoAction";
import { CSVLink } from "react-csv";
function List() {
  const { todos } = useSelector((state) => state.TodoReducer);
  const header = [
    {
      label: "Todo",
      key: "todo",
    },
    {
      label: "Due Date",
      key: "dueDate",
    },
    {
      label: "Time Stamp",
      key: "timeStamp",
    },
    {
      label: "User Id",
      key: "userId",
    },
  ];
  const csvReport = {
    filename:"Report.csv",
    header:header,
    data : todos
  }
  const userId = useSelector((state) => state.AuthReducer.user.uid);
  const deleteHandler = (id) => {
    dispatch(deletedataRedux(id));
  };
  useEffect(() => {
    dispatch(getTodos(userId));
  }, []);
  const dispatch = useDispatch();
  const clearAllHandler = (todos) => {
    dispatch(cleardataRedux(todos));
  };
 
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((item, i) => {
         
          return (
            <div
              style={
                new Date (item.dueDate) <
                new Date() ? { background: "#ca564b", color: "#e5e7ea" }
                  : null
              }
              className="todo"
              key={i}
            >
              <li className="todo-item"> {item.todo} </li>
              <button
                className="complete-btn"
                onClick={() => deleteHandler(item.uid)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          );
        })}
        <div className="todo clearAll">
          <li className="todo-item">You have {todos.length} pending task</li>
          <button className="clear-btn" onClick={() => clearAllHandler(todos)}>
            Clear All
          </button>
          <br/>
          <button title="Download to CSV" className="download-btn"><CSVLink {...csvReport} ><i className="fas fa-download"></i></CSVLink></button>
          
        </div>
      </ul>
    </div>
  );
}
export default List;
