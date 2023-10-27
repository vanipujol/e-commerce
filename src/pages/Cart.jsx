import { useContext } from "react";
import CartContext from "../context/cartContext.jsx";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from '@mui/material';
import CartSummaryTable from "../components/CartSummaryTable.jsx";


function Cart() {
    const {cart} = useContext(CartContext);
    const navigate = useNavigate();

    if (cart.items.length === 0) return <Typography className={'rosedark-color text-center'} style={{margin:"2em"}}>El carrito está vacío</Typography>;

    return (
        <Box display="flex" flexDirection="column" m={2}>
            <Typography variant="h4" style={{marginBottom:'0.5em', marginTop:'0.5em'}} className={`rose-color`}>Resumen del carrito</Typography>
            <CartSummaryTable cart={cart} />
            <Button variant="contained" style={{ backgroundColor: '#be9397' }} onClick={() => navigate("/checkout")}>
                Finalizar Compra
            </Button>
        </Box>
    );
}

export default Cart;