import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser?.isAdmin;

  console.log("admin", admin);
  return (
    <>
      {admin ? (
        <>
          <Navbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;

// <>
//   <Routes>
//     <Route path="/login" element={<Login />} />
//   </Routes>
//   <Navbar />
//   <div className="container">
//     <Sidebar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/users" element={<UserList />} />
//       <Route path="/user/:userId" element={<User />} />
//       <Route path="/newUser" element={<NewUser />} />
//       <Route path="/products" element={<ProductList />} />
//       <Route path="/product/:productId" element={<Product />} />
//       <Route path="/newProduct" element={<NewProduct />} />
//     </Routes>
//   </div>
// </>
