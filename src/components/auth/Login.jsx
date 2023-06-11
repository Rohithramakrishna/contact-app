import React, { useState } from "react";
import Styles from "./-auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { auth } from "../apis/Firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

const Login = () => {
  let navigate = useNavigate();
  let [toggle, setToggle] = useState(false);
  let [showPassword, setShowPassword] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let togglePassword = () => {
    setToggle(!toggle);
    setShowPassword(!showPassword);
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let userData = await signInWithEmailAndPassword(auth, email, password);
      console.log(userData);
      if (userData.user.emailVerified === true) {
        navigate("/todo-list");
        toast.success(`successfully ${email} logged in`);
      } else {
        toast.error("Email not yet Verified");
      }
    } catch (error) {
      toast.error("Register Your Account");
    }
    setEmail("");
    setPassword("");
    setIsLoading(false);
  };
  return (
    <section id={Styles.authLoginBlock}>
      <article>
        <div
          className="
        container"
        >
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="enter an email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type= {showPassword === true ? "text" : "password"}
                placeholder="enter a password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <span className={Styles.eyeIcon} onClick={togglePassword}>
                {showPassword === true ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <div className="form-group">
              <aside>
                <span>Don't have an account </span>
                <span>
                  <Link to="/register">Register</Link>
                </span>
              </aside>
              <p>
                <Link to="/">Reset password</Link>
              </p>
            </div>
            <div className="form-group">
              <button>{isLoading === true ? "loading..." : "login"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
