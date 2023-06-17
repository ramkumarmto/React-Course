import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
    const { productId }  = useParams()
    const [ pDetails, setPDetails] = useState({})
    console.log("pData", pDetails)
    

    const getproductDetails = async()=>{

    const productDetails =    await axios.get(`https://dummyjson.com/products/${productId}`);
    setPDetails(productDetails.data)
    

    }

    useEffect(()=>{
        getproductDetails()
    },[])


  return (
    <div>
        <h2>{pDetails.title}</h2>
        <p>{pDetails.description}</p>
    </div>
  )
}

export default ProductDetails