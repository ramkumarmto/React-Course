import { Navbar } from "./Navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";



const HomePage = () => {
  const [ ourProducts, setOurProducts ] = useState([])

  const getproducts = async()=>{
   const products = await axios.get("https://dummyjson.com/products")
  //  console.log(products.data.products)
   setOurProducts(products.data.products)
  }

  console.log(ourProducts)
 

  useEffect(()=>{

    getproducts()
    // component did mount
 
  },[])

  return (
    <>
      <Navbar />
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
      <div style={{ display: "flex", flexWrap: "wrap", margin: 25 }}>
        {ourProducts.map((product, index) => (
          <ProductCard key={product.id} title={product.title} image={product.images[0]} description={product.description}/>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
