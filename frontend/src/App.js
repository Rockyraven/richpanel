import "./App.css";
import Messages from "./pages/Messages/Messages";
import { Login } from "./pages/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";

function App() {
  const { loggedInUser } = useContext(AuthContext);
  // Implement a function to check if the user is authenticated
  const isAuthenticated = () => {
    return loggedInUser !== null;
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" replace />;
  };

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<Messages />} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;