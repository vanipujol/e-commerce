import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon.jsx";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
            <Box display="flex" flexDirection="column">
                <Typography>
                    Elementos en el carrito:{" "}
                    {cart.items.reduce((acc, curr) => acc + curr.quantity, 0)}
                </Typography>
                <Typography>Total: ${cart.total}</Typography>
            </Box>

            <Button variant="contained" color="primary" onClick={() => navigate("/cart")}>
                <CartIcon></CartIcon>
            </Button>
        </Box>
    );
};

export default CartWidget;