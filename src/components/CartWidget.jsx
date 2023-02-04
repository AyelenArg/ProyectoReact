import "./styles/CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ()=>{
return(
    <div className='cart-widget'>
        <FontAwesomeIcon icon = {faShop} size="2x"/>
        <div className='qty-display'>0</div>
    </div>
)
}
export default CartWidget