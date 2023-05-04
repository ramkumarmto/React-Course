import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

// inline style
// external css
// module.css
// styled comp css
// css libraries


function Navbar (){
  return(
    <h1>Navbar comp</h1>
  )
}
function Footer (){
  return (
    <p>Footer Componet</p>
  )
}
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


const container = ReactDOM.createRoot(document.getElementById("container"));
container.render(<HomePage />);


