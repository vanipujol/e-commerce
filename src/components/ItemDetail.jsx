import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useQuantitySelector} from "../hooks/useQuantitySelector.js";
import React, {useContext} from "react";
import CartContext from "../context/cartContext.jsx";
import ItemQuantitySelector from "./ItemQuantitySelector.jsx";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

/**
 * React component for displaying the details of an item.
 *
 * This component displays information about the item, including its image, title, description, price, and quantity selector.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.item - The item to display details for.
 * @returns {JSX.Element} The rendered item details component.
 */
export const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const {counter, decrement, increment, reset} = useQuantitySelector(1, 0, 10)

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Grid container spacing={5} style={{display: 'flex', justifyContent: 'center', marginTop: '3em'}}>
            <Grid item xs={12} sm={6} md={4} container justifyContent="center">
                <div>
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{maxWidth: '100%'}}
                    />
                </div>
            </Grid>
            <Grid item xs={11} sm={6} md={4}>
                <Typography className={`rose-color`} variant="h4" gutterBottom>
                    {item.title}
                </Typography>
                <Typography style={{whiteSpace: 'pre-line'}} variant="h6" gutterBottom>
                    Descripción: {item.description}
                </Typography>
                <Typography gutterBottom className={`rose-color mt-4`} variant="h5">
                    Precio: ${item.price}
                </Typography>
                <Typography style={{whiteSpace: 'pre-line'}} variant="h6" gutterBottom>
                    Recordá que tus pedidos se realizan con 48hs de anticipación.
                </Typography>
                <ItemQuantitySelector
                    counter={counter}
                    decrement={decrement}
                    increment={increment}
                    reset={reset}
                    addItem={addItem}
                    setSnackbarMessage={setSnackbarMessage}
                    setSnackbarOpen={setSnackbarOpen}
                    setSnackbarSeverity={setSnackbarSeverity}
                    item={item}
                />
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert variant="filled" severity={snackbarSeverity} onClose={handleSnackbarClose}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Grid>
    );
};

export default ItemDetail;
