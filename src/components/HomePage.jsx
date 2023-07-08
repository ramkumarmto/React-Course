
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./homePage.css"



const HomePage = () => {
  const [ ourProducts, setOurProducts ] = useState([])
  const [searchedProduct, setsearchedproducts] = useState("")

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

  const filterProducthandler = (event)=>{
    setsearchedproducts(event.target.value)
  }


  const filteredProducts = ourProducts.filter((product, index) => product.title.toLowerCase().includes(searchedProduct.toLowerCase()))




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
        <input type="text" placeholder="Search Products..." onChange={filterProducthandler} />
       </div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: 10, width : '100%', justifyContent : 'center' }}>
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} id={product.id} title={product.title} image={product.images[0]} description={product.description}/>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
