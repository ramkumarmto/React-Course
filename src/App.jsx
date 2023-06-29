import Counter from "./components/Counter";
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Featuredproducts from "./components/Featuredproducts";
import ErrorComponent from "./components/ErrorComponent";
import { Navbar } from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import ForgetPassword from "./auth/ForgetPassword";

const Router = createBrowserRouter([
  { path: "/", element: <Navbar />, errorElement: <ErrorComponent />, children : [
    { path: "/", element: <HomePage /> },
    { path: "/contact", element: <Contact /> },
    { path: "/featured-products", element: <Featuredproducts /> },
    { path: "/product-details/:productId", element: <ProductDetails /> },
    { path: "/counter", element: <Counter /> },
    { path: "/cart", element: <Cart /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/forgetpassword", element: <ForgetPassword /> },
  ] },
  
]);

const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};
export default App;
