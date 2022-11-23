import { useContext } from "react";
import { useTheme } from "../../context/theme-context"
import { useShoppingCart } from "../../context/cart-context";

import Button from "../button";
import { Link } from "react-router-dom";


const Navbar = () => {
    
    const { theme, toggleTheme } = useTheme();
    console.log(theme)
    const { getCartCount } = useShoppingCart();
    return (
        <nav className={`navbar navbar-expand-lg bg-${theme} sticy-bottom`}>
            <div className="container">
                <div className="collapse navbar-collapse col-md-9">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a></li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/product">Product List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/about">About</a></li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sepet">
                                Sepetim {`(${getCartCount()})`}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="com-md-3">
                    <Button onClick={toggleTheme} >
                        Değiştir
                    </Button>

                </div>

            </div>
        </nav>
    )
}
export default Navbar;