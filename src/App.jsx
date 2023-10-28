import './App.css'
import ItemListContainer from "./pages/ItemListContainer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ItemDetailContainer} from "./pages/ItemDetailContainer.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";
import Checkout from "./pages/Checkout.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

/**
 * Main application component responsible for routing and page layout.
 *
 * This component sets up the application structure, including routes for different pages,
 * and renders the main navigation bar, content pages, and the footer.
 *
 * @returns {JSX.Element} The main `App` component.
 */
export default function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route exact path="/category/:id" element={<Category/>}/>
                <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

