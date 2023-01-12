import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-light">
    
  <div className="container-fluid">
    <Link to="/"><a className="navbar-brand h1 text-light" href="#">Sample Crud app</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/"><a className="nav-link active text-light" aria-current="page" href="#">All Products</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/addProduct">
          <a className="nav-link text-light" href="#">Add Product</a>
          </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
