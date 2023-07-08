import { useState, useEffect} from "react";
import axios from "axios";

export const useAPIFetch = (url)=>{
    const [ ourProducts, setOurProducts ] = useState([]);
    const [ isLoading, setIsLoading] = useState(false)
    const getproducts = async()=>{
        setIsLoading(true)
      try{
        const products = await axios.get(url)
        setOurProducts(products.data.products)
        setIsLoading(false)
      } catch(err){
        alert(err)
        setIsLoading(false)
      }
       }
     
       useEffect(()=>{
     
         getproducts()
      
       },[])

       return {isLoading, ourProducts};
}