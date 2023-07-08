import Footer from "./Footer";
import ProductCard from "./ProductCard";

import "./homePage.css";
import { useAPIFetch } from "../hooks/custom-hooks";

const Featuredproducts = () => {
  const { isLoading, ourProducts } = useAPIFetch(
    "https://dummyjson.com/products"
  );

  const filteredProducts = ourProducts?.filter(
    (product, index) => product.rating >= 4.5
  );

  console.log(filteredProducts);

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
        <h2>-- featured Products -- </h2>
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

export default Featuredproducts;
