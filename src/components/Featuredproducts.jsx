
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./homePage.css"



const Featuredproducts = () => {
  const [ ourProducts, setOurProducts ] = useState([]);

  const getproducts = async()=>{
   const products = await axios.get("https://dummyjson.com/products")
  //  console.log(products.data.products)
   setOurProducts(products.data.products)
  }

  // console.log(ourProducts)
 

  useEffect(()=>{

    getproducts()
    // component did mount
 
  },[])

  


  const filteredProducts = ourProducts.filter((product, index) => product.rating >= 4.5)


  console.log(filteredProducts)

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

      
      <div style={{ display: "flex", flexWrap: "wrap", margin: 25 }}>
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id}  id={product.id} title={product.title} image={product.images[0]} description={product.description}/>
        ))}
      </div>
      <Footer />
    </>
  );
};


export default Featuredproducts