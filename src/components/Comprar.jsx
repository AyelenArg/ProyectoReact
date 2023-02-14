import objetos from "../Objetos.json";
import Tienda from "./Tienda";


const Comprar=() =>{

return(
    <ul>
        {objetos.map((objeto)=>(
        <Tienda key={objeto.id} objeto={objeto}/>
        ))}
    </ul>
)
}
export default Comprar
