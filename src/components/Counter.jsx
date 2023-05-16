import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Counter() {
  const [number, setNumber] = useState(0);
  const [showCounter, setshowCounter] = useState(true)
  // console.log(myNumber)

  const incHandler = ()=>{
    setNumber(number + 5)
  }

  function decHandler(){
    setNumber(number - 1)
  }

  function resetHandler (){
    setNumber(0)
  }

  function togglehandler(){
    setshowCounter((prevValue)=> !prevValue);
  }

  console.log("hellow!")
  return (
    <div
      style={{
        width: 1000,
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "40%", height: "40%" }}>
        <Card.Body>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            { showCounter ? <h2 className="text-danger">{number}</h2> : null}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <Button variant="btn btn-outline-primary mx-2" onClick={incHandler}> Increment</Button>
            <Button variant="btn btn-outline-primary mx-2" onClick={decHandler}> Decrement</Button>
            <Button variant="btn btn-outline-primary mx-2" onClick={togglehandler}>Toggle</Button>
            <Button variant="btn btn-outline-primary mx-2 mt-3" onClick={resetHandler}> Reset</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Counter;
