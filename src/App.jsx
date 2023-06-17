import Counter from "./components/Counter";
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Featuredproducts from "./components/Featuredproducts";
import ErrorComponent from "./components/ErrorComponent";
import { Navbar } from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

const Router = createBrowserRouter([
  { path: "/", element: <Navbar />, errorElement: <ErrorComponent />, children : [
    { path: "/", element: <HomePage /> },
    { path: "/contact", element: <Contact /> },
    { path: "/featured-products", element: <Featuredproducts /> },
    { path: "/product-details/:productId", element: <ProductDetails /> },
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
