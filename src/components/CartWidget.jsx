import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon.jsx";
import Grid from "@mui/material/Grid";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Grid container justifyContent="flex-end">
            <Box >
                <Box display="flex" justifyContent="space-between" gap={5}  alignItems="center" >
                    <Box  display={{ xs: 'none', md: 'block' }} flexDirection="column" >
                        <Typography style={{color: 'black'}}>
                            Elementos en el carrito:{" "}
                            {cart.items.reduce((acc, curr) => acc + curr.quantity, 0)}
                        </Typography>
                        <Typography  style={{color: 'black'}}>Total: ${cart.total}</Typography>
                    </Box>
                    <Button variant="contained" style={{ backgroundColor: '#be9397' }} onClick={() => navigate("/cart")} >
                        <CartIcon></CartIcon>
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
};

export default CartWidget;