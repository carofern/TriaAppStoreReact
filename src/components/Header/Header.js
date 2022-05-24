import CartIcon from "../CartIcon/CartIcon"

export default function Header () {

    const Button = ({texto}) => {
        console.log(texto)
        return (
            <input type="button" value={texto} />
        )
    }

    const headerStyles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        listStyle: "none"
    } 

    return (
        <header className="header">
            <div className="logo">Market Shop</div>
            <ul className="links" style={headerStyles}>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
            <CartIcon />
        </header>
    );
}