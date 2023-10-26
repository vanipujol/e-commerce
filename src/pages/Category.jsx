import { useParams } from "react-router-dom";
import useItemsByCategory from "../hooks/useItemsByCategory";
import ItemList from "../components/ItemList.jsx";
import { useContext } from "react";
import CartContext from "../context/cartContext.jsx";
import {
    Typography,
    Grid,
} from "@mui/material";

function Category() {
    const params = useParams();

    console.log(params)
    const { items, isLoading } = useItemsByCategory(params.id);
    const { addItem } = useContext(CartContext);

    if (isLoading) {
        return <div>Cargando...</div>;
    }
    console.log(items);

    if (items.length === 0)
        return <div>No hay productos con la categoría: {params.id}</div>;

    return (
        <section>
            <Typography className={`rose-color mb-5 text-center`} variant="h4">
               {params.id}
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

export default Category;