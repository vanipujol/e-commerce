import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell'; // Corrige la importación de TableCell
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'; // Cambia esta importación a TableRow
import TableBody from '@mui/material/TableBody'; // Corrige la importación de TableBody
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

function CartSummaryTable({ cart }) {
    return (
        <Box mb={2}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold" className='rosedark-color'>Producto </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold" className='rosedark-color' >Cantidad</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold" className='rosedark-color'>Precio Unitario</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle1" fontWeight="bold" className='rosedark-color'>Precio total</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.items.map(({ item, quantity }) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{quantity}</TableCell>
                                <TableCell align="left">${item.price}</TableCell>
                                <TableCell align="left">${item.price * quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default CartSummaryTable;
