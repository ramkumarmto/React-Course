import React, { useState} from "react";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
const [showCheckoutBtn] = useState(cartItems.length > 0 ? true : false)
  console.log("cartItems", cartItems);
  return (
    <div style={{ width : "100%", display : "flex", flexDirection : 'column', alignItems : 'center'}}>
        {
           cartItems.length >0 ?  (cartItems.map((product)=> (
            <Card style={{ width: "18rem", margin : 15 }} key={product.id}>
            <Card.Img variant="top" src={product.image}/>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
              {product.description}
              </Card.Text>
              
            </Card.Body>
          </Card>
        ))) : <p className="text-center mt-5">No cart items yet!</p>
        }

        <div>
            { showCheckoutBtn && <Button variant="success">CHECKOUT</Button>}
        </div>
     
    </div>
  );
}

export default Cart;
