/**
 * A React component that displays a list of items based on the selected category.
 *
 * @returns {JSX.Element} The Category component that lists items of a specific category and provides options to add items to the cart.
 */

import {useParams} from "react-router-dom";
import useItemsByCategory from "../hooks/useItemsByCategory";
import ItemList from "../components/ItemList.jsx";
import {useContext} from "react";
import CartContext from "../context/cartContext.jsx";
import {
    Typography,
    Grid, Stack, CircularProgress,
} from "@mui/material";

function Category() {
    const params = useParams();

    const {items, isLoading} = useItemsByCategory(params.id);
    const {addItem} = useContext(CartContext);

    if (isLoading) {
        return (
            <Stack sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}
                   spacing={2} direction="row">
                <CircularProgress style={{color: '#623d41'}}/>
            </Stack>
        );
    }

    if (items.length === 0)
        return <div className={'rosedark-color, text-center'} style={{margin: '2em'}}>No hay productos con la
            categoría: {params.id}</div>;

    const mdGrid = window.screen.width > 1600 ? 2.5 : 4

    return (
        <section>
            <Typography className={`rose-color text-center `} style={{margin: '0.8em'}} variant="h4">
                {params.id}
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

export default Category;