
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { cartAction } from '../store/index';
import { useDispatch } from 'react-redux';


function ProductCard(props) {
  const dispatch = useDispatch()


  const addToCarthandler = (product)=>{
dispatch(cartAction.addToCart(product))
  }
    
  return (
    <Card style={{ width: '18rem', margin : 5, padding : 5 }}>
  <Link to={`/product-details/${props.id}`}> <Card.Img variant="top" src={props.image} height={200} /></Link>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      {props.description}
      </Card.Text>
      <Button variant="primary" onClick={()=> addToCarthandler(props)} >Add To cart</Button>
    </Card.Body>

  </Card>
  )
}

export default ProductCard;