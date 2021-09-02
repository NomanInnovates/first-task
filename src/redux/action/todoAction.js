import firebase from "firebase";
import {
  DELETE_TODO,
  CLEAR_ALL,
  ADD_TODO,
  FETCH_TODO,
  ERROR_FETCH_TODOS,
} from "../constants/types";
import { db } from "../../configs/firebase";

export const getTodos = () => async (dispatch) => {
  try {
    console.log("try");
    
    db.collection("todo").onSnapshot((querySnapshot) => {
       let fetchTodo = [];
      querySnapshot.forEach((doc) => {
        fetchTodo.push({ ...doc.data(), uid: doc.id });
      });

      console.log("fetched todo",fetchTodo)
      dispatch({
        type: FETCH_TODO,
        payload: fetchTodo,
      });
    });
    

  } catch (error) {
    console.log("error", error);
    dispatch({
      type: ERROR_FETCH_TODOS,
      payload: error,
    });
  }
};
export const deletedataRedux = (id) => async () => {
  db.collection("todo").doc(id).delete();
}
export const dataFrom = (data) => async (dispatch) => {
  console.log("data in action=>", data);
  try {
    await db.collection("todo").add({
      todo: data,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch({
      type: ADD_TODO,
      payload: data,
    });
  } catch (error) {
    alert(error.message);
  }
};


export const cleardataRedux = (todos) => async (dispatch) => {
  for(let i = 0 ; i < todos.length ; i ++){
    // console.log(todos[i].uid)
    db.collection("todo").doc(todos[i].uid).delete();
  }
  // db.collection("todo").delete()
  // dispatch({
  //   type: CLEAR_ALL,
  //   payload: "",
  // });
};
