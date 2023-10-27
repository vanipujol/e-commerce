import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ItemList = ({ item, handleClick}) => {
    const navigation = useNavigate();


    return (
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Card sx={{maxWidth: 500, minWidth: 350, maxHeight: 500, backgroundColor: '#F5F5F5'}}>
                    <CardMedia
                        component="img"
                        alt={item.title}
                        height="300"
                        image={item.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"
                                    className={`rose-color`}>
                            {item.title}
                        </Typography>
                        <Typography gutterBottom variant="body2" className='rosedark-color'>
                            {item.categoryId}
                        </Typography>
                        <Typography variant="body1" className={`rose-color mt-2`}>
                            ${item.price}
                        </Typography>
                    </CardContent>
                    <Box sx={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                        <Button
                            variant="text"
                            to={`/item/${item.id}`}
                            onClick={() => handleClick(item, 1)}
                            style={{
                                color: '#be9397',
                                border: '1px solid #be9397',
                                marginRight: '8px'
                            }}
                        >
                            Agregar al carrito
                        </Button>
                        <Button
                            variant="text"
                            to={`/item/${item.id}`}
                            onClick={() => navigation(`/item/${item.id}`)}
                            style={{
                                color: '#be9397',
                                border: '1px solid #be9397',
                            }}
                        >
                            Ver detalle
                        </Button>
                    </Box>
                </Card>
            </Box>
    )
}

export default ItemList;
