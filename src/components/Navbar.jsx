import Brand from "./Brand.jsx";
import MenuButton from "./MenuButton.jsx";
import CategoryItem from "./CategoryItem.jsx";
import CartContainer from "./CartContainer.jsx";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
             data-bs-theme="dark">
            <div className="container-fluid">
                <Brand/>
                <MenuButton/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CategoryItem isActive={true} name="Indumentaria"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem isActive={false} name="Mujer"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem isActive={false} name="Hombre"/>
                        </li>
                        <li className="nav-item">
                            <CategoryItem isActive={false} name="Niños"/>
                        </li>
                    </ul>
                </div>
                <CartContainer/>
            </div>
        </nav>
    );
};

export default Navbar;