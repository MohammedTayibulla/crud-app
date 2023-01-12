import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        const getProduct = async () => {
          const URL=process.env.REACT_APP_API_URL;               
            await axios.get(`${URL}/products/${id}`).then((res)=>{
            console.log(res.data);    
            setProduct(res.data.product);
           }).catch((err)=>{
            console.log(err)
           })
            
        }
        getProduct();
    }, [])
    return (
    <div>
      <h1>Single Product</h1>
      <div className="container-fluid">
      <div class="card mb-3 w-100 p-4">
  <div class="row g-0">
    <div class="col-md-4 col-sm-6 col-xs-8">
      <img src={product.image} class="img-fluid" alt={product.title} />
    </div>
    <div class="col-md-8 col-sm-6 col-xs-8">
      <div class="card-body">
        <h3 class="card-title">{product.title}</h3>
        <h3 class="card-title">{product.brand}</h3>
        <h5 class="card-text">{product.description}</h5>
        <div class="card-text btn btn-warning"><i className="bi bi-star-fill"></i>&nbsp;{product.rating}</div><br /><br />
        <div class="card-text lead">&nbsp;Hurry! only {product.stocks} left!</div>
        <div class="card-text btn btn-primary"><i className="bi bi-tag"></i>&nbsp;&#8377;  {product.price}</div>



      </div>
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default SingleProduct
