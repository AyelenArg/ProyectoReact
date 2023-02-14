import React from 'react';

import NavBar from './components/NavBar.jsx';
import Revuelta from './components/Revuelta.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Comprar from './components/Comprar.jsx';
import Tienda from './components/Tienda.jsx'
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
 <NavBar background={"transparent"}/>
 <Revuelta title="Revuelta Deco Store"/>
 <ItemListContainer greeting="Lista de productos"/>

 <div><BrowserRouter>
 <Routes>
<Route path="/Comprar" element={<Comprar/>}/>
<Route path="/Tienda" element={<Tienda/>}/>
 </Routes>
 </BrowserRouter>
 </div>

</> 
  );
}

export default App;
