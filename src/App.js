import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Modal from "./components/Modal";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";
import ReviewsByProduct from "./pages/ReviewsByProduct";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import UserOrders from "./pages/UserOrders";
import Categories from "./pages/Categories";
import Category from "./components/Category";
import ForgotPassword from "./components/ForgotPassword";
import UserAccount from "./pages/UserAccount";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const [showModal1, setShowModal1] = useState(false); //login
  const [showModal2, setShowModal2] = useState(false); //register
  const [showModal3, setShowModal3] = useState(false); //forgot
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Modal showModal={showModal1} setShowModal={setShowModal1}>
        <UserLogin
          setShowModal1={setShowModal1}
          setShowModal2={setShowModal2}
          setShowModal3={setShowModal3}
        />
      </Modal>
      <Modal showModal={showModal2} setShowModal={setShowModal2}>
        <UserRegister
          setShowModal2={setShowModal2}
          setShowModal1={setShowModal1}
        />
      </Modal>
      <Modal showModal={showModal3} setShowModal={setShowModal3}>
        <ForgotPassword setShowModal3={setShowModal3} />
      </Modal>
      <Header setShowModal1={setShowModal1} setIsCartOpen={setIsCartOpen} />
      <ShoppingCart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        setShowModal1={setShowModal1}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="products"
          element={<Products setIsCartOpen={setIsCartOpen} />}
        />
        <Route
          path="product/:ganjaId"
          element={
            <ProductDetails
              setShowModal1={setShowModal1}
              setIsCartOpen={setIsCartOpen}
            />
          }
        />
        <Route path="reviews-by-product" element={<ReviewsByProduct />} />
        <Route path="user-orders" element={<UserOrders />} />
        <Route path="categories" element={<Categories />} />
        <Route
          path="category"
          element={<Category setIsCartOpen={setIsCartOpen} />}
        />
        <Route
          path="user-account"
          element={<UserAccount setShowModal1={setShowModal1} />}
        />
        <Route path="reset-password/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
