// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AppProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});

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
    localStorage.setItem("token", resData?.token);
    setLoggedInUser(resData);
  };
  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
// const useAuth = () => useContext(AuthContext);
export { AppProvider, AuthContext };
