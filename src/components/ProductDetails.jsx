import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "./productDetails.css";
import Button from "react-bootstrap/Button";

function ProductDetails() {
  const { productId } = useParams();
  const [pDetails, setPDetails] = useState({});
  console.log("pData", pDetails);

  const getproductDetails = async () => {
    const productDetails = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    setPDetails(productDetails.data);
  };

  useEffect(() => {
    getproductDetails();
  }, []);
  console.log("abc", pDetails?.images);

  return (
    <>
      <div className="mt-4 container-fluid pDetails_container">
        <Carousel
          style={{
            backgroundColor: "gray",
            width: "45%",
            height: 400,
            borderRadius: 16,
            marginRight: 18,
          }}
        >
          {pDetails?.images?.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                width="100%"
                height="350"
                className="d-block w-100"
                src={image}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div style={{ width : 400}}>
          <h4 style={{ color: "tomato" }}>{pDetails.title}</h4>
          <h6 style={{ color: "gray" }}> ${pDetails.price}</h6>
          <p>Rating : {pDetails.rating}</p>
          <p>{pDetails.description}</p>

          <div>
            <Button variant="info">Add To Cart</Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
