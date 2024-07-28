import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import auth, { authActions } from "./store/auth";
import "./App.css";
import Dashboard from "./pages/Dashboarrd/Dashboard";
import Table from "./components/Dashboard/Table";

function App() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  const products = [
    {
      _id: 1,
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: 2999,
    },
    {
      _id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: 1999,
    },
    {
      _id: 3,
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: 99,
    },
    {
      _id: 4,
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: 799,
    },
    {
      _id: 5,
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: 999,
    },
    {
      _id: 1,
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: 2999,
    },
    {
      _id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: 1999,
    },
    {
      _id: 3,
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: 99,
    },
    {
      _id: 4,
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: 799,
    },
    {
      _id: 5,
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: 999,
    },
    {
      _id: 1,
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: 2999,
    },
    {
      _id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: 1999,
    },
    {
      _id: 3,
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: 99,
    },
    {
      _id: 4,
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: 799,
    },
    {
      _id: 5,
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: 999,
    },
    {
      _id: 1,
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: 2999,
    },
    {
      _id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: 1999,
    },
    {
      _id: 3,
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: 99,
    },
    {
      _id: 4,
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: 799,
    },
    {
      _id: 5,
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: 999,
    },
  ];

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="/dashboard/products"
            element={<Table products={products} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
