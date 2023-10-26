import './App.css'
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ItemDetailContainer} from "./components/ItemDetailContainer.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";


export default function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route exact path="/category/:id" element={<Category/>}/>
                <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route exact path="/cart" element ={<Cart />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

