import React, { useContext } from "react";
import UserContext from "./userContext";

const Login = () => {
  const userContext = useContext(UserContext);

  return (
    <div>
      <button
        onClick={() => {
          userContext.onLoggedIn("ussername");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
