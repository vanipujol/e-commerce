import { useContext } from "react";
import CartContext from "../context/cartContext.jsx";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from '@mui/material';


function Cart() {
    const {cart} = useContext(CartContext);
    const navigate = useNavigate();

    if (cart.items.length === 0) return <Typography>El carrito está vacío</Typography>;

    return (
        <Box display="flex" flexDirection="column">
            <Typography variant="h4">Resumen del carrito</Typography>
            {/*<CartSummaryTable cart={cart}/>*/}
            <Button variant="contained" color="primary" onClick={() => navigate("/checkout")}>
                Finalizar Compra
            </Button>
        </Box>
    );
}
export default Cart;