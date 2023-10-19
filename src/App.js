import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About.jsx';
import Comment from './Pages/Comment/Comment.jsx';
import Product from './Pages/Product/Product.jsx';
import ProductList from './Pages/ProductList/ProductList.jsx';

import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='dashboard' element={<Dashboard/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='comment' element={<Comment/>}></Route>
        <Route path='product' element={<Product/>}></Route>
        <Route path='productlist' element={<ProductList/>}></Route>
      </Routes>
      </Sidebar>
      </BrowserRouter>
    </div>
  )
}

export default App
