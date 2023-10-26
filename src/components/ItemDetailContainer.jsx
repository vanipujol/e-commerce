import {useParams} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Button } from "@mui/material";
import {useCounter} from "../hooks/useCounter.js";


export const ItemDetailContainer = () => {
    // Getting the 'id' parameter from the URL using the 'useParams' hook
    const {id} = useParams();

    const {counter, decrement, increment, reset} = useCounter(1,0,10)

    // Using the custom hook 'useCakeByName' to fetch cake details
    const cake = useCakeByName(id);

    if (!cake) {
        return <div>Cargando...</div>;
    }

    // Rendering the cake details
    return (
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={4}>
                <img
                    src={cake.image}
                    alt={cake.name}
                    style={{ maxWidth: '100%' }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Typography className={`rose-color`} variant="h4" gutterBottom>
                    {cake.name}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Descripción: {cake.details}
                </Typography>
                <Typography className={`rose-color mt-4`} variant="h5" >
                    Precio: ${cake.price}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Recordá que tus pedidos se realizan con 48hs de anticipación.
                </Typography>
            </Grid>
            <ButtonGroup>
                <Button onClick={decrement}>-</Button>
                <Typography>{counter}</Typography>
                <Button onClick={increment}>+</Button>
                <Button onClick={reset}>Reset</Button>
            </ButtonGroup>
        </Grid>
    );
};