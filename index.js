import React from "react";
import ReactDOM from "react-dom/client";

// const h2 = React.createElement(
//   "h2",
//   {},
//   "Welcome to The Ram Kumar utube channel!"
// );


//   <!-- <div class="container">
//     <div class="innerContainer">
//       <h2>Hello world!</h2>
//       <p>Hello world from para!</p>
//     </div>
//   </div> -->

const myname = "ram Kumar";

const myJsx = <div className="innerContainer">
     <h2>Hello world! { 5 + 7 }</h2>
      <p>Hello world from para! {myname}</p>
    </div>




const result = React.createElement("div", { className: "innerContainer" }, [React.createElement("h2", {}, "Hello World"), React.createElement("p", {}, "Hello from para")])

const container = ReactDOM.createRoot(document.getElementById("container"));
container.render(myJsx);


