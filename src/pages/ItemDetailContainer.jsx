import {useParams} from "react-router-dom";
import Grid from '@mui/material/Grid';
import {Stack, CircularProgress} from "@mui/material";
import useItemById from "../hooks/useItemById.js";
import ItemDetail from "../components/ItemDetail.jsx";
import React from "react";

export const ItemDetailContainer = () => {
    // Getting the 'id' parameter from the URL using the 'useParams' hook
    const params = useParams();
    const { item, isLoading } = useItemById(params.id);

    if (isLoading) {
        return (
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }} spacing={2} direction="row">
                <CircularProgress style={{color:'#623d41'}} />
            </Stack>
        )
    }

    if (!item) return <div className={'rosedark-color text-center'} style={{margin: '2em'}}> No hay productos con el id: {params.id}</div>;

    // Rendering the cake details
    return (
        <Grid >
            <ItemDetail item={item} />
        </Grid>
    );
};