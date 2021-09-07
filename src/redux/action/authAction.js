import { auth, db } from "../../configs/firebase";
import { LOGIN, SIGNIN, CHECKUSER, LOGOUT } from "../constants/types";

export const createUser = (data) => async (dispatch) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    // console.log("uid of created user", user.user.uid);

    db.collection("User").add({
      email: data.email,
      uid: user.user.uid,
    });
    dispatch({
      type: SIGNIN,
      payload: user,
    });
  } catch (error) {
    alert(error.message);
    console.log("error", error);
  }
};

export const doLogin = (data) => async (dispatch) => {
  try {
    // firebase login
    const user = await auth.signInWithEmailAndPassword(
      data.email,
      data.password
    );
    dispatch({
      type: LOGIN,
      payload: user.user,
    });
  } catch (error) {
    alert(error);
    console.log("error", error);
  }
};

export const doLogout = () => (dispatch) => {
  try {
    // firebase logOut
    const res = auth.signOut();
    console.log("user", res);
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    alert(JSON.stringify(error));
    console.log("error", error);
  }
};

export const checkUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: CHECKUSER,
      payload: user,
    });
  } catch (error) {
    alert(error.message);
  }
};
