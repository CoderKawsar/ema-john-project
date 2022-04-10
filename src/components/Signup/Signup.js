import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    navigate("/");
  }

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords didn't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be minimum 6 character long");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleCreateUser}>
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
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {hookError && <p className="error">{hookError}</p>}
          <input type="submit" className="form-submit" value="Sign Up" />
        </form>
        <p style={{ textAlign: "center" }}>
          Already have an account?&nbsp;
          <Link className="form-link" to="/login">
            Login
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

export default Signup;
