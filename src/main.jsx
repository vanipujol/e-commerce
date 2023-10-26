import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import CartProvider from "./context/cartProvider.jsx";

/*const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: "G-YTHC2NP4P5"
};*/

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


