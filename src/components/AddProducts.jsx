import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
const AddProducts = () => {
  const navigate=useNavigate();
  const [product,setProduct]=useState({
    "title": "",
      "price": "",
      "brand": "",
      "description": "",
      "category": "",
      "image": "",
      "rating": ""
  });

  const onChange=(e)=>{
    e.preventDefault();
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const URL=process.env.REACT_APP_API_URL;   
    axios.post(`${URL}/products`,product).then((res)=>{
      alert('new product added');
      console.log('new product added')
      navigate('/');
    }).catch((err)=>{
      console.log(err)
    })

  }
  return (
    <div>
<div className="container">
      <h1 className="text-center">Add Product</h1>

<form onSubmit={handleSubmit}>
  <div className="row mb-3">
    <label for="title" className="col-sm-2 col-form-label">Title</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" required name="title" onChange={onChange} />
    </div>
  </div>
  <div className="row mb-3">
    <label for="brand" className="col-sm-2 col-form-label">Brand</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" required name="brand" onChange={onChange} />
    </div>
  </div>
  <div className="row mb-3">
    <label for="description" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
    <textarea className="form-control" required  name="description" onChange={onChange}></textarea>
    </div>
  </div>

  <div className="row mb-3">
    <label for="description" className="col-sm-2 col-form-label">Category</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" required name="category" onChange={onChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="price" className="col-sm-2 col-form-label">Price in &#8377; INR</label>
    <div className="col-sm-10">
      <input type="number" step="0.01" className="form-control" required name="price" onChange={onChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="image" className="col-sm-2 col-form-label">image url</label>
    <div className="col-sm-10">
      <input type="url" className="form-control" required name="image" onChange={onChange} />
    </div>
  </div>
  <div className="row mb-3">
    <label for="rating" className="col-sm-2 col-form-label">rating</label>
    <div className="col-sm-10">
      <input type="number" step="0.01" min="0" max="5" className="form-control" required name="rating" onChange={onChange} />
    </div>
  </div>
  <div className="row mb-3">
    <label for="stocks" className="col-sm-2 col-form-label">stocks</label>
    <div className="col-sm-10">
      <input type="number" step="0.01" className="form-control" required name="stocks" onChange={onChange} />
    </div>
  </div>
  <div className="d-grid gap-2">
  <input type="submit" value="ADD PRODUCT" className='btn btn-primary' />
</div>
</form>
</div>

    </div>
  )
}

export default AddProducts
