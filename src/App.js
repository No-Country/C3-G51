import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registro from './components/Registro/Registro';
import ItemDetail from './components/ItemDetail/ItemDetail';
import React from 'react';
import ProductosContainer from './components/ProductosContainer/ProductosContainer'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registro" element={<Registro />} />
          <Route exact path="/itemdetail" element={<ItemDetail />} />
          <Route exact path="/productos" element={<ProductosContainer/>} />
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
