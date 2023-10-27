import './App.css'
import ItemListContainer from "./pages/ItemListContainer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ItemDetailContainer} from "./pages/ItemDetailContainer.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";
import Checkout from "./pages/Checkout.jsx";
import ResponsiveAppBar from "./components/Navbar.jsx";
import Navbar from "./components/Navbar.jsx";
import InstagramIconButton from "./components/Footer.jsx";


export default function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route exact path="/category/:id" element={<Category/>}/>
                <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route exact path="/cart" element ={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
           <InstagramIconButton/>
        </BrowserRouter>
    )
}

