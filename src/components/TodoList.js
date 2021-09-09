import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleardataRedux } from "../redux/action/todoAction";
import { getTodos } from "../redux/action/todoAction";
import { deletedataRedux } from "../redux/action/todoAction";
import { CSVLink } from "react-csv";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

function List() {
  const { todos } = useSelector((state) => state.TodoReducer);

  const DataSet = [
    {
      columns: [
        { title: "Todo" },
        { title: "Due Date" },
        { title: "Time Stamp" },
      ],
      data: todos.map((item) => [
        { value: item.todo },
        { value:  item.dueDate.toString() },
        {
          value: item.timeStamp?.seconds
            ? new Date(item.timeStamp.seconds * 1000).toString().slice(0,21)
            : "",
        },
      ]),
    },
  ];
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
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.AuthReducer.user.uid);
  const deleteHandler = (id) => {
    dispatch(deletedataRedux(id));
  };
  useEffect(() => {
    dispatch(getTodos(userId));
  }, [dispatch, userId]);
  const clearAllHandler = (todos) => {
    dispatch(cleardataRedux(todos));
  };
  // todos
  const exportTodo = todos.map((itm) => {
    return {
      timeStamp: itm?.timeStamp?.seconds
        ? new Date(itm.timeStamp.seconds * 1000)
        : "",
      dueDate: itm.dueDate,
      todo: itm.todo,
    };
  });
  const csvReport = {
    filename: "Report.csv",
    header: header,
    data: exportTodo,
  };

  console.log(DataSet);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((item, i) => {
          return (
            <div
              style={
                new Date(item.dueDate) < new Date()
                  ? { background: "#ca564b", color: "#e5e7ea" }
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
          <br />
         
        </div>
        <div className="export-div">
        <ExcelFile
            filename="report"
            element={<button className="xlsx-btn" type="button" title= " download to xlsx">Download as xlsx &nbsp; <i className="fas fa-download"></i></button>}
          >
            <ExcelSheet dataSet={DataSet} name="todo report" />
          </ExcelFile>
          <button title="Download to CSV" className="download-btn">
            <CSVLink {...csvReport}> Download as CSV &nbsp; <i className="fas fa-download"></i>
            </CSVLink>
          </button>
        </div>
      </ul>
    </div>
  );
}
export default List;
