import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log("logged in");
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <p className="error">{error?.message}</p>
          {loading && <p>Loading . . .</p>}
          <input type="submit" className="form-submit" value="Login" />
        </form>
        <p style={{ textAlign: "center" }}>
          New to Ema-john?&nbsp;
          <Link className="form-link" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="line-div">
          <div className="line"></div>
          <p>or</p>
          <div className="line"></div>
        </div>
        <button className="google-btn">
          {/* <FontAwesomeIcon icon={faGoogle} /> */}
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
