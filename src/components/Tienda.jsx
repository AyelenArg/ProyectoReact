import { useState } from "react";
import {useNavigate } from "react-router-dom"

import Objetos from "../Objetos.json"


const Tienda =() =>{
    const [Product, setProduct]= useState("")
    const [Imagen, setImagen]= useState("")
    const [Precio, setPrecio]= useState ("")

    const navigate = useNavigate()

    const Objetos = Objetos("")
    


    return(
        <>
        {Product.map(Objetos)}
        <li className="movieCard">
            <img src={Product.imagen} alt={Product.producto} />
            <div>{Product.producto}</div>
            <div>{Product.precio}</div>
        </li>
    
        </>
        
    )
}

export default Tienda
