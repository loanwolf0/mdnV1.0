import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import auth, { authActions } from "./store/auth";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ) {
      dispatch(authActions.logIn());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  }, []);
  return (
    // Import Only Pages, For components => import then to a page then use that page here.
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
