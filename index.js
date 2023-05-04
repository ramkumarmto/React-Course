import React from "react";
import ReactDOM from "react-dom/client";

// functional comp
// class components

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

const HomePage = ()=>{
  return(
    <div>
      <Navbar />
    <h2>first react component ever</h2>
    <Footer />
    {/* <Footer></Footer>
    <Footer />
    {Navbar()} */}
    </div>
  )
}



const container = ReactDOM.createRoot(document.getElementById("container"));
container.render(<HomePage />);


