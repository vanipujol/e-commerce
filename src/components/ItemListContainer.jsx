// import {useParams} from "react-router-dom";
import Grid from '@mui/material/Grid';
import useItems from "../hooks/useItems.js";
import {ItemList} from "./ItemList.jsx";
import {useContext} from "react";
import CartContext from "../context/cartContext.jsx";

const ItemListContainer = () => {
    // Using the custom hook 'useItems' to get the list of cakes
    const { items, isLoading } = useItems();
    const { addItem } = useContext(CartContext);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <section>
                <h1 className={`rose-color mb-5 text-center`} >Productos</h1>
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
