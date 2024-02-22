import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AppProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("userData") &&
      JSON.parse(localStorage.getItem("userData") || "null")
  );

  const navigate = useNavigate();
  const login = async (email, password) => {
    const res = await fetch(
      "https://richpanel-backend-wscu.onrender.com/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const resData = await res.json();
    localStorage.setItem("userData", JSON.stringify(resData));
    setLoggedInUser(resData);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
// const useAuth = () => useContext(AuthContext);
export { AppProvider, AuthContext };