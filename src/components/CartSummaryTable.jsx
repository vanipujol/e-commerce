import React, {useContext} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import CartContext from "../context/cartContext.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";

/**
 * React component for rendering a summary table of items in the shopping cart.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.cart - An object representing the shopping cart.
 * @returns {JSX.Element} The rendered shopping cart summary table.
 */
function CartSummaryTable({cart}) {

    const {removeItem} = useContext(CartContext);

    return (
        <Box mb={2}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold"
                                            className='rosedark-color'>Producto </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold"
                                            className='rosedark-color'>Cantidad</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold" className='rosedark-color'>Precio
                                    Unitario</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold" className='rosedark-color'>Precio
                                    total</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold" className='rosedark-color'>Remover
                                    item</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.items.map(({item, quantity}) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{quantity}</TableCell>
                                <TableCell align="left">${item.price}</TableCell>
                                <TableCell align="left">${item.price * quantity}</TableCell>
                                <TableCell align="left" onClick={() => removeItem(item.id)}>
                                    <Button style={{color: 'black'}} type="submit"><DeleteIcon/> </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default CartSummaryTable;
