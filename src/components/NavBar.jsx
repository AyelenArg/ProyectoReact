

import "./styles/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartWidget from "./CartWidget"
import React from 'react';



const NavBar = ({background})=>{


return (
    
    <header className={`header background--${background}`}>
    
    <div className="header-container">

<div className="menu-button">
<FontAwesomeIcon icon={faBars} size="lg"/>
<span>Menu</span>
</div>
<nav>
    <ul className="nav-container">
        <li>
            <a href="">Home</a>
        </li>
       <li>
            <a href="">Esencia</a>
        </li>
        <li>
            <a href="">Objetos</a>
        </li> 
        <li className="products-item">
            <a href="">Tienda<span className="arrow"></span></a>
        </li>
        <li>
            <a href="">Contacto</a>
        </li>
        
     
    </ul>
    
</nav>

    
     <div className="logo-container">
        <img src='./img/logo.png' alt="logo" />
    </div>

   <CartWidget/> 
    </div>

   

    </header>
    
)


}
export default NavBar