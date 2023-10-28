/**
 * A React component that displays the contents of the shopping cart and allows users to manage its items.
 *
 * @returns {JSX.Element} The Cart component with the cart items, a summary table, and options to clear the cart or proceed to checkout.
 */

import {useContext} from "react";
import CartContext from "../context/cartContext.jsx";
import {useNavigate} from "react-router-dom";
import {Box, Typography, Button, Stack} from '@mui/material';
import CartSummaryTable from "../components/CartSummaryTable.jsx";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from '@mui/icons-material/Send';

function Cart() {
    const {cart, clear} = useContext(CartContext);
    const navigate = useNavigate();

    if (cart.items.length === 0) return <Typography className={'rosedark-color text-center'} style={{margin: "2em"}}>El
        carrito está vacío</Typography>;

    return (
        <Box display="flex" flexDirection="column" m={3}>
            <Typography variant="h4" style={{marginBottom: '0.5em', marginTop: '0.5em'}} className={`rose-color`}>Resumen
                del carrito</Typography>
            <CartSummaryTable cart={cart}/>

            <Stack direction="row" spacing={2}>
                <Button style={{color: '#be9397', border: '1px solid #be9397'}} onClick={() => clear()}
                        variant="outlined" startIcon={<DeleteIcon/>}>
                    Vaciar carrito
                </Button>
                <Button style={{backgroundColor: '#be9397'}} onClick={() => navigate("/checkout")} variant="contained"
                        endIcon={<SendIcon/>}>
                    Finalizar Compra
                </Button>
            </Stack>
        </Box>
    );
}

export default Cart;