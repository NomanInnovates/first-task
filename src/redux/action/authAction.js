import { auth, db } from "../../configs/firebase";
import { LOGIN, SIGNIN , LOGOUT} from "../constants/types";

export const createUser = (data) => async (dispatch) => {
  console.log("data in user action =>", data.email, data.password);
  try {
    const user = await auth.createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    console.log("asasasa", user.user.uid);

    db.collection("User").add({
      email: data.email,
      uid: user.user.uid,
    });
    dispatch({
      type: SIGNIN,
      payload: user,
    });
  } catch (error) {
    // }
    alert(error);
    console.log("error", error);
  }
};

export const doLogin = (data) => async (dispatch) => {
  try {
    console.log("user", data.email);
    // firebase login
    const user = await auth.signInWithEmailAndPassword(
      data.email,
      data.password
    );
    console.log("user", user.user.uid);
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
  console.log("logout in actuin");
  try {
    // firebase login
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
