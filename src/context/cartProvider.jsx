import { useState } from "react";
import CartContext from "./cartContext.jsx";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState({
        items: [],
        total: 0,
    });

    const addItem = (item, quantity, setSnackbarMessage, setSnackbarOpen, setSnackbarSeverity) => {
        const { items } = cart;
        const index = items.findIndex((i) => i.item.id === item.id);

        console.log(item)
        if (item.stock < quantity){
            setSnackbarMessage("No hay suficientes productos en stock")
            setSnackbarOpen(true);
            setSnackbarSeverity("error")
            return
        }
        if (index > -1) {
            items[index].quantity += quantity;
        } else {
            items.push({
                item,
                quantity,
            });
        }
        setCart({
            ...cart,
            items,
            total: getTotal(),
        });

        setSnackbarMessage("Items agregado al carrito exitosamente")
        setSnackbarOpen(true);
        setSnackbarSeverity("success")
    };

    const removeItem = (itemId) => {
        const { items } = cart;
        const index = items.findIndex((i) => i.item.id === itemId);

        if (index > -1) {
            items.splice(index, 1);
        }

        setCart({
            ...cart,
            items,
        });
    };

    const clear = () => {
        setCart((prevValues) => ({
            ...prevValues,
            items: [],
            total: 0,
        }));
    };

    const getTotal = () => {
        const { items } = cart;
        return items.reduce(
            (acc, item) => acc + item.quantity * item.item.price,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clear,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}