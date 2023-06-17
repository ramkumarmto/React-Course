
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
    // console.log(props)
  return (
    <Card style={{ width: '18rem', margin : 5, padding : 5 }}>
    <Card.Img variant="top" src={props.image} height={200} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      {props.description}
      </Card.Text>
      <Button variant="primary">Add To cart</Button>
    </Card.Body>

  </Card>
  )
}

export default ProductCard;