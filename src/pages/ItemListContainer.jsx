import Grid from '@mui/material/Grid';
import useItems from "../hooks/useItems.js";
import {ItemList} from "../components/ItemList.jsx";
import {useContext} from "react";
import CartContext from "../context/cartContext.jsx";
import Typography from "@mui/material/Typography";
import { CircularProgress, Stack} from "@mui/material";

const ItemListContainer = () => {
    // Using the custom hook 'useItems' to get the list of cakes
    const { items, isLoading } = useItems();
    const { addItem } = useContext(CartContext);

    if (isLoading) {
        return (
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }} spacing={2} direction="row">
                <CircularProgress style={{color:'#623d41'}} />
            </Stack>
        );
    }

    return (
        <section>
            <Typography className={`rose-color text-center `} style={{margin:'0.8em'}} variant="h4">
                Productos
            </Typography>
                <Grid container spacing={5} justifyContent="center">
                    {items.map((item) => (
                        <Grid item key={item.id} xs={12} sm={12} md={2.5}>
                            <ItemList item={item} handleClick={addItem} />
                        </Grid>
                        ))}
                    </Grid>

        </section>
    );
}

export default ItemListContainer;
