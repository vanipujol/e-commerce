/**
 * React component for displaying an individual item in a list.
 *
 * This component represents an item in a list with details such as image, title, category, price, and options to add to cart or view details.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.item - The item to display in the list.
 * @param {function} props.handleClick - The function to handle item interactions.
 * @returns {JSX.Element} The rendered item list component.
 */

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const ItemList = ({item, handleClick}) => {
    const navigation = useNavigate();

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };


    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Card sx={{maxWidth: 500, minWidth: 350, maxHeight: 500, backgroundColor: '#F5F5F5'}}>
                <CardMedia
                    component="img"
                    alt={item.title}
                    height="300"
                    image={item.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"
                                className={`rose-color`}>
                        {item.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" className='rosedark-color'>
                        {item.categoryId}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" className={`rose-color mt-2`}>
                        ${item.price}
                    </Typography>
                </CardContent>
                <Box sx={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                    <Button
                        variant="text"
                        to={`/item/${item.id}`}
                        onClick={() => handleClick(item, 1, setSnackbarMessage, setSnackbarOpen, setSnackbarSeverity)}
                        style={{
                            color: '#be9397',
                            border: '1px solid #be9397',
                            marginRight: '8px'
                        }}
                    >
                        Agregar al carrito
                    </Button>
                    <Button
                        variant="text"
                        to={`/item/${item.id}`}
                        onClick={() => navigation(`/item/${item.id}`)}
                        style={{
                            color: '#be9397',
                            border: '1px solid #be9397',
                        }}
                    >
                        Ver detalle
                    </Button>
                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={6000}
                        onClose={handleSnackbarClose}
                    >
                        <Alert variant="filled" severity={snackbarSeverity} onClose={handleSnackbarClose}>
                            {snackbarMessage}
                        </Alert>
                    </Snackbar>
                </Box>
            </Card>
        </Box>
    )
}

export default ItemList;
