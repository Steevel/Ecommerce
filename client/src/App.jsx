import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user?.currentUser);
  const regUser = useSelector((state) => state.register?.currentUser);
  // console.log("regUser", regUser);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route
          path="/login"
          element={user || regUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user || regUser ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </div>
  );
};

export default App;
