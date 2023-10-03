import {Link, useParams} from "react-router-dom";
import {useCakesList} from "../hooks/useCakesList";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Button} from "@mui/material";
import {useCategory} from "../hooks/useCategory.js";


const ItemListContainer = () => {
    // Using the custom hook 'useCakesList' to get the list of cakes
    const {cakes} = useCakesList();

    // Retrieving the 'id' parameter from the URL
    const {id} = useParams();

    // Using the custom hook 'useCategory' to filter cakes by category
    const categoryItems = useCategory(id);

    if (id && !categoryItems) {
        return <div>Cargando...</div>;
    }

    // Capitalize the first letter of the category
    const title = id ? id.charAt(0).toUpperCase() + id.slice(1) : "Productos"
    return (
        <section>
            <div>
                <h1 className={`rose-color mb-5`} style={{textAlign: 'center'}}>{title}</h1>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={5} justifyContent="center">
                        {(id ? categoryItems : cakes).map((cake) => (
                            <Grid item xs={12} sm={12} md={2.5} key={cake.name}>
                                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <Card sx={{maxWidth: 350, maxHeight: 500, backgroundColor: '#F5F5F5'}}>
                                        <CardMedia
                                            component="img"
                                            alt={cake.name}
                                            height="300"
                                            image={cake.image}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div"
                                                        className={`rose-color`}>
                                                {cake.name}
                                            </Typography>
                                            <Typography variant="body2" style={{color: '#623d41'}}>
                                                {cake.details}
                                            </Typography>
                                            <Typography variant="body1" className={`rose-color mt-2`}>
                                                ${cake.price}
                                            </Typography>
                                        </CardContent>

                                        <Box sx={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                                            <Button
                                                variant="outlined"
                                                component={Link}
                                                to={`/item/${cake.id}`}
                                                style={{
                                                    color: '#be9397',
                                                    border: '1px solid #be9397',
                                                }}
                                            >
                                                Ver producto
                                            </Button>
                                        </Box>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </section>
    );
}

export default ItemListContainer;
