import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const URL=process.env.REACT_APP_API_URL;
    await axios.get(`${URL}/products`).then(res => {
      console.log(res.data);
      setProducts(res.data.products)
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    loadProducts();
  }, [])

  const handleDelete=(id)=>{
    const URL=process.env.REACT_APP_API_URL;
    axios.delete(`${URL}/products/${id}`).then((res)=>{
      alert('item deleted');
      console.log('item deleted')
      loadProducts();
    })
  }
  return (
    <>      <h1 className="text-center">All Product</h1>
      <div className="container">
        <div className="row">
          
          {Object.keys(products).length > 0
            ? (<>
            <div className="container">
              <table className="table table-hover col-md-6 col-sm-6 col-xs-10">
              <thead className='table-dark'>
                <tr  scope="row">
                  <th scope="col">Title</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col text-center">Action</th>
                </tr>
              </thead>
              {products.map((value) => {
              return (<>

  <tbody>
    <tr key={value._id}>
      <th scope="row">{value.title}</th>
      
      <td>{value.brand}</td>
      <td>{value.category}</td>
      <td>&#8377; {value.price}</td>
      <td >
<button className="btn btn-sm btn-info"><i className="bi bi-info-circle"></i>      <Link to={`/singleProduct/${value._id}`} > More info</Link></button> &nbsp;
      <Link to={`/editProduct/${value._id}`} ><button className="btn btn-sm btn-warning"><i className="bi bi-pencil"></i> Edit</button></Link>&nbsp;
       <button className="btn btn-sm btn-danger" onClick={()=>{handleDelete(`${value._id}`)}}><i className="bi bi-trash"></i>Delete</button>  
       </td>
    </tr>

  </tbody>
            </>)
        })}
        </table>
        </div>
        </>
        ):(
        <>
          <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        </>)
        }
      
      </div>
    </div>
    </>
  )
}

export default AllProducts;
