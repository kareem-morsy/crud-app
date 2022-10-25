import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const {productId} = useParams();
    const api_url = `http://localhost:9000/products/${productId}`;
    const [product , setProduct] = useState({})
    useEffect(()=>{
        fetch(api_url)
        .then((res)=> res.json())
        .then((data)=>{ 
            console.log(data)
            setProduct(data)
        })
    },[])
  return (
    <>

        <h1>{product.title}</h1>

    </>
  )
}

export default ProductDetails