import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductsPage() {
    let api_url= "http://localhost:9000/products"
    const [sproduct , setSproduct] = useState([]);
    useEffect(()=>{
        fetch(api_url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log('data', data);
            setSproduct(data)
        })
    },[])
    return ( 
    <> 
        <h1>Products Page</h1>
        <Link to='/add' className='btn btn-success p-2 mt-4'>Add New product</Link>
        <table class ="table mt-5">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Operation</th>
                </tr>
            </thead>
            <tbody>
                {sproduct.map((product)=>{
                    return(
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.title.slice(0,50)}...</td>
                            <td>{product.price}</td>
                            <td>
                                <button type="button" className="btn btn-danger btn-sm">delete</button>
                                <button type="button" className="btn btn-info btn-sm m-2">Edit</button>
                                <button type="button" className="btn btn-primary btn-sm">View</button>
                            </td>
                        </tr>
                    )
                })}
                
            </tbody> 
        </table>
    </>
)}

export default ProductsPage