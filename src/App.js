import React from 'react';

import NavBar from './components/NavBar.jsx';
import Revuelta from './components/Revuelta.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';

function App() {
  return (
    <>
 <NavBar background={"transparent"}/>
 <Revuelta title="Revuelta Deco Store"/>
 <ItemListContainer greeting="Lista de productos"/>
 </>
  );
}

export default App;
