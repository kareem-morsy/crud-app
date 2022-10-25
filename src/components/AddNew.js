import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddNew() {
  const navigate = useNavigate();
  const [title , setTitle] = useState("");
  const [price , setPrice] = useState(0);

  const SubmitForm =(e)=>{
    e.preventDefault()
    fetch("http://localhost:9000/products",
    {
      method : "POST", 
      headers : {
        "Content-Type": "Application/json"
      },
      body   : JSON.stringify({
        title : title,
        price : price
      })
    }
    )
    .then((res)=> res.json())
    .then((data)=>{
      navigate('/')
    })
  }
  return (
    <>
      <form onSubmit={SubmitForm}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Product Number</label>
          <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>setTitle(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Price</label>
          <input type="number" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>

  )
}

export default AddNew