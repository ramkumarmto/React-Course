
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";




const HomePage = ()=>{
  return(
    <>
      <Navbar />
      <div style={{ color : "tomato", display : "flex", justifyContent : 'center' , alignItems : 'center', marginTop : 20}}>
      <h2>-- Our Products -- </h2>
      </div>
    <div style={{ display : 'flex', flexWrap : "wrap", margin : 25}}>

      <ProductCard title="Macbook M2"  image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_MFWtTWkLOa1fsHFdBhKWsMM1e7Y5TyGgA&usqp=CAU"/>
      <ProductCard  title="HP laptop" image ="https://thumbs.dreamstime.com/b/black-hp-laptop-wooden-table-office-equipment-black-hp-laptop-wooden-table-jakarta-indonesia-199401268.jpg"/>
      <ProductCard  title="iPhome 14" image="https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg" />
      <ProductCard  title="Nova Trimmer" image="https://cdn1.smartprix.com/rx-iFHbfJeXQ-w1200-h1200/FHbfJeXQ.jpg" />
      
    
     
   
   

    </div>
    <Footer />
   
    </>
  )
}
export default HomePage;