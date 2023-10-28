/**
 * React component for rendering a shopping cart widget.
 *
 * This component displays the total cost of items in the shopping cart and provides a link to the cart page.
 *
 * @returns {JSX.Element} The rendered shopping cart widget.
 */

import React, {useContext} from "react";
import CartContext from "../context/cartContext";
import {Button, Typography, Box, Badge} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import LocalMallIcon from '@mui/icons-material/LocalMall';

const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Grid container justifyContent="flex-end">
            <Box>
                <Box display="flex" justifyContent="space-between" gap={5} alignItems="center">
                    <Box display={{xs: 'none', md: 'block'}} flexDirection="column">
                        <Typography className={'rosedark-color'}>Total: ${cart.total}</Typography>
                    </Box>
                    <Button variant="contained" style={{backgroundColor: '#be9397'}} onClick={() => navigate("/cart")}>
                        <Badge badgeContent={cart.items.reduce((acc, curr) => acc + curr.quantity, 0)} color="error">
                            <LocalMallIcon style={{margin: "0.2em"}} className={'rosedark-color'}/>
                        </Badge>
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
};

export default CartWidget;