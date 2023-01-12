import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import Navbar from './components/Navbar';
import AllProducts from './components/AllProducts';
import AddProducts from './components/AddProducts';
import NotFound from './components/NotFound';
import EditProduct from './components/EditProduct';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
  <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/addProduct" element={<AddProducts />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        <Route path="*" component={<NotFound />}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
