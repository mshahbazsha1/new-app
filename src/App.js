
import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import ProductsDetails from './pages/ProductsDetails';



function App() {
  const [products, setProducts] = useState([]);

  // this is useEffect
  useEffect(() => {

    fetch('https://fakestoreapi.com/products').then((data) => {
      return data.json()
    }).then((res) => {
      setProducts(res);
    })

  }, []);
  //  End of useEffect

  return (
    <div className='container'>
      <Header />

      <Routes>
        <Route path='/' element={<Home products={products} />} />
        <Route path='/Categories' element={<Categories />}/>
        <Route path='/ContactUs' element={<ContactUs />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Product/:id' element={<ProductsDetails />}/>


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
