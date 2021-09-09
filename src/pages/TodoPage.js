import "./LoginPage.css";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import { doLogout } from "../redux/action/authAction";
import { useDispatch } from "react-redux";
function TodoPage() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(doLogout());
  };

  return (
    <div className="App">
      <button className="logOut-btn" onClick={handleLogout}>
        Log out
      </button>
      <header>
        <h1> Todo App </h1>
      </header>
      <Header />
      <hr/>
      <TodoList />
    </div>
  );
}

export default TodoPage;
