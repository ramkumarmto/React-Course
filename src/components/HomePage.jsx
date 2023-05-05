import { Navbar } from "./Navbar";
import Footer from "./Footer";



const styledObj = { color : "red", backgroundColor : 'black', marginTop : 20, padding : 20, margin : 20}

const HomePage = ()=>{
  return(
    <>
      <Navbar />
    <h2 style={styledObj}>first react component ever</h2>
    <p className="homepage-para"> hejbcj,jsdj,ksdjlks </p>
    <Footer />
   
    </>
  )
}
export default HomePage;