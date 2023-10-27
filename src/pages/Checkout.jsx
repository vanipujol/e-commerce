import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CartSummaryTable from '../components/CartSummaryTable';
import { useContext } from 'react';
import CartContext from '../context/cartContext.jsx';
import useForm from '../hooks/useForm';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import BuyerForm from '../components/BuyerForm';

function Checkout() {
    const { cart } = useContext(CartContext);
    const [values, handleChange] = useForm({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        email2: '',
    });

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    if (cart.items.length === 0) return <div className={'rosedark-color text-center'} style={{margin: "2em" }}>El carrito está vacío</div>;


    function isCartValid(cart) {
        let isValid = true;

        cart.items.forEach(item => {
            if (item.quantity > item.item.stock) {
                isValid = false;
                console.error(`La cantidad de ${item.item.title} es mayor que el stock disponible.`);
            }
        });

        return isValid;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!isCartValid(cart)){
            handleSnackbar('La cantidad de algún producto es mayor que el stock disponible', 'error');
            return;
        }

        // Check if any field is empty
        if (Object.values(values).some(value => value === '')) {
            handleSnackbar('Todos los campos son obligatorios', 'error');
            return;
        }

        if (values.email !== values.email2) {
            handleSnackbar('Los emails no coinciden', 'error');
            return;
        }

        sendOrder();
    };

    const sendOrder = () => {
        const db = getFirestore();

        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, {
            ...cart,
            buyer: {
                name: values.name,
                lastName: values.lastName,
                phone: values.phone,
                email: values.email,
            },
            date: new Date(),
        }).then(({ id }) => {
            handleSnackbar(`Orden enviada. El id de la orden es: ${id}`, 'success');
        });
    };

    return (
        <Grid container direction="column" justify="space-between" >
            <Grid m={2} item>
                <Typography variant="h4" className={`rose-color`} style={{marginBottom:'0.5em', marginTop:'0.5em'}} >Resumen del carrito</Typography>
                <CartSummaryTable cart={cart} />
            </Grid>
            <Grid m={2} item>
                <Typography variant="h4" className={`rose-color`} style={{marginBottom:'0.5em'}} >Formulario de compra</Typography>
                <BuyerForm onSubmit={onSubmit} values={values} handleChange={handleChange} />
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert  variant="filled" severity={snackbarSeverity} onClose={handleSnackbarClose}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Grid>
    );
}

export default Checkout;
