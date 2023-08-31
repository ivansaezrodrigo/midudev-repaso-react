import './Footer.css'
export function Footer({filters}) {
    return (
        <footer className="footer">
            <h4>Prueba técnica de React</h4>
            <span>Iván Sáez Rodrigo {JSON.stringify(filters,null,2)}</span>
            <h5>Shopping Cart con useContext & useReducer</h5>
        </footer>
    )
}