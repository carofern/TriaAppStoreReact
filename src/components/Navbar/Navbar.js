import CartIcon from "../CartIcon/CartIcon"

export default function Navbar() {

    const headerStyles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        listStyle: "none"
    } 

    return (
        <header className="header">
            <div className="logo">Mi Menu</div>
            <ul className="links" style={headerStyles}>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
            <CartIcon count={2}/>
        </header>
    );
}