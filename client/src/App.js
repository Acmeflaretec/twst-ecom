import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Cart from "./page/Cart";
import Shop from "./page/Shop";
import ProductDetails from "./component/shop/ProductDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<ProductDetails/>}/>
        </Routes>
      </Layout>
      <ToastContainer />
    </Router>
  );
};

export default App;
