import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export function Footer() {
    const {filters} = useFilters()
    const {cart} = useCart()

    return (
        <footer className="footer">
            <h4>Prueba técnica de React</h4>
            <span>Iván Sáez Rodrigo {JSON.stringify(filters,null,2)}</span>
            <span>Cart {JSON.stringify(cart,null,2)}</span>
            <h5>Shopping Cart con useContext & useReducer</h5>
        </footer>
    )
}