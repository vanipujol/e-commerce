import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import CartProvider from "./context/cartProvider.jsx";

const firebaseConfig = {
    apiKey: "AIzaSyAyXreUqZHFDXM--mys1Mb80-jKkMW-f5M",
    authDomain: "reposteria-elda.firebaseapp.com",
    projectId: "reposteria-elda",
    storageBucket: "reposteria-elda.appspot.com",
    messagingSenderId: "431565977436",
    appId: "1:431565977436:web:9917fe722f95f9d0e83399",
    measurementId: "G-YTHC2NP4P5"
}
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
        <CartProvider>
            <App/>
        </CartProvider>
);


