import Grid from '@mui/material/Grid';
import useItems from "../hooks/useItems.js";
import {ItemList} from "../components/ItemList.jsx";
import React, {useContext} from "react";
import CartContext from "../context/cartContext.jsx";
import Typography from "@mui/material/Typography";
import {CircularProgress, Stack} from "@mui/material";

/**
 * A container component to display a list of items.
 *
 * This component fetches the list of items and displays them using the `ItemList` component.
 *
 * @returns {JSX.Element} The `ItemListContainer` component.
 */
const ItemListContainer = () => {
    // Using the custom hook 'useItems' to get the list of cakes
    const {items, isLoading} = useItems();
    const {addItem} = useContext(CartContext);

    if (isLoading) {
        return (
            <Stack sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}
                   spacing={2} direction="row">
                <CircularProgress style={{color: '#623d41'}}/>
            </Stack>
        );
    }

    const mdGrid = window.screen.width > 1600 ? 2.5 : 4

    return (
        <section>
            <Typography className={`rose-color text-center `} style={{margin: '0.8em'}} variant="h4">
                Productos
            </Typography>
            <Grid container spacing={5} justifyContent="center">
                {items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={mdGrid}>
                        <ItemList item={item} handleClick={addItem}/>
                    </Grid>
                ))}
            </Grid>

        </section>
    );
}

export default ItemListContainer;
