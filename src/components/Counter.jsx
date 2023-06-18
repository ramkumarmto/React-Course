import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { countAction } from "../store";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch()
 const number =  useSelector((state)=> state.counter.count);
 const showNumber =  useSelector((state)=> state.counter.showCount);
 console.log(number)



  const incHandler = ()=>{
    dispatch(countAction.increase())
   
   
  }

  function decHandler(){
    dispatch(countAction.decrease())
  }

  function resetHandler (){
    dispatch(countAction.reset())
  }

  function togglehandler(){
    dispatch(countAction.toggle())
    
  }

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
            { showNumber && <h2 className="text-danger">{number}</h2> }
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
