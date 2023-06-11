import React, { useContext } from "react";
import Styles from "./-Navbar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "./../apis/ContextApi";

const Auth = () => {
  let { authUser, isLoading, logOut } = useContext(AuthContext);
console.log(authUser)
  let AuthenticatedUser = () => {
    return (
      <div className={Styles.logoutBlock}>
        <button className={Styles.logoutBtn} onClick={logOut}>
          logout
        </button>
      </div>
    );
  };
  let AnonymousUser = () => {
    return (
      <div className={Styles.AuthBlock}>
        <Link to="/register">
          <button className={Styles.regBtn}>Register</button>
        </Link>
        <Link to="/login">
          <button className={Styles.logBtn}>Login</button>
        </Link>
      </div>
    );
  };

  return (
    <div>
      {isLoading === true ? (
        "loading..."
      ) : !authUser ? (
        <AnonymousUser />
      ) : (
        <AuthenticatedUser />
      )}
    </div>
  );
};

export default Auth;
