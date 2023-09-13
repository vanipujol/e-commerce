import './App.css'
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer";

function App() {
    return (
        <div className="app">
            <Navbar/>
            <ItemListContainer greeting="Bienvenidos"/>
        </div>
    );
}

export default App;
