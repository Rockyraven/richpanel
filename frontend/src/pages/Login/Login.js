import React, { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate, useRoutes } from "react-router-dom";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Login to your account</h1>

      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="manoj@richpanel.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <label for="remember">
                <input type="checkbox" id="remember" name="remember" />
                Remember Me
            </label> */}
      <button
        onClick={() => {
          login(email, password);
          navigate("/");
        }}
      >
        Login
      </button>
      <p>{/* New to MyApp? <Link to="/signup">Sign Up</Link> */}</p>
    </div>
  );
};
