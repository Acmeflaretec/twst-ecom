// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./layout/Layout";
// import Home from "./page/Home";
// import About from "./page/About";
// import Contact from "./page/Contact";
// import Cart from "./page/Cart";
// import Shop from "./page/Shop";
// import ProductDetails from "./component/shop/ProductDetails";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UserLayout from "./layout/UserLayout";
// import UserProfile from "./component/user_profile/UserProfile";
// import Profile from "./page/Profile";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Cart from "./page/Cart";
import Shop from "./page/Shop";
import ProductDetails from "./component/shop/ProductDetails";
import Profile from "./page/Profile";
import UserLayout from "./layout/UserLayout";
import Dashboard from "./component/user_profile/Dashboard";
import Orders from "./component/user_profile/Orders";
import Address from "./component/user_profile/Address";
import UserProfile from "./component/user_profile/UserProfile";
import Login from "./component/auth/Login";
import CustomToaster from "./utils/constant/CustomToaster";
import Wishlist from "./page/Wishlist";

const App = () => {
  return (
    // <Router>
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/shop" element={<Shop />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="/details/:id" element={<ProductDetails/>}/>
    //     </Routes>
    //   </Layout>
    //   <ToastContainer />
    // </Router>
    <Router>
      <Routes>
        {/* Main Application Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="details/:id" element={<ProductDetails />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* User Profile Layout */}
        <Route path="/profile" element={<UserLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="address" element={<Address />} />
          <Route path="user_profile" element={<UserProfile />} />
        </Route>
      </Routes>
      <CustomToaster />
    </Router>
  );
};

export default App;
