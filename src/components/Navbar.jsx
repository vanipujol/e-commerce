import Brand from "./Brand.jsx";
import MenuButton from "./MenuButton.jsx";
import CartWidget from "./CartWidget.jsx";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg border-body">
            <div className="container-fluid">
                <Brand/>
                <MenuButton/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={`nav-link navlink-size`} to="/category/tortas"> TORTAS </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link navlink-size`} to="/category/tartas"> TARTAS </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link navlink-size`}
                                     to="/category/especialidades"> ESPECIALIDADES </NavLink>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
};

export default Navbar;