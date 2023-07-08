import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useState } from "react";
import "./homePage.css";
import { useAPIFetch } from "../hooks/custom-hooks";

const HomePage = () => {
  const [searchedProduct, setsearchedproducts] = useState("");
  const { isLoading, ourProducts } = useAPIFetch(
    "https://dummyjson.com/products"
  );

  const filterProducthandler = (event) => {
    setsearchedproducts(event.target.value);
  };

  const filteredProducts = ourProducts.filter((product, index) =>
    product.title.toLowerCase().includes(searchedProduct.toLowerCase())
  );

  return (
    <>
      <div
        style={{
          color: "tomato",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <h2>-- Our Products -- </h2>
      </div>

      {/* search bar  */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Products..."
          onChange={filterProducthandler}
        />
      </div>
      {isLoading ? (
        <h5>Loading...</h5>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: 10,
            width: "100%",
            justifyContent: "center",
          }}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.images[0]}
              description={product.description}
            />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};
export default HomePage;
