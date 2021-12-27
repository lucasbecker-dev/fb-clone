import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  // TODO: login persistence between page loads
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src={require("./images/android-chrome-192x192.png")}
          alt="Beckerbook logo"
        />
        <h2>beckerbook</h2>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
