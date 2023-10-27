import {Button, ButtonGroup} from "@mui/material";
import Typography from "@mui/material/Typography";
const ItemQuantitySelector = ({ counter, decrement, increment, reset, addItem, setSnackbarMessage, setSnackbarOpen, setSnackbarSeverity, item })  => {
    return (
        <ButtonGroup style={{ marginTop: '1em' }}>
            <Button variant="text" style={{ margin: '3px', color: '#be9397', border: '1px solid #be9397' }} onClick={decrement}>-</Button>
            <Typography className={`rosedark-color`} style={{ margin: '3px', alignItems: 'center', display: 'flex' }}>{counter}</Typography>
            <Button variant="text" style={{ margin: '3px', color: '#be9397', border: '1px solid #be9397' }} onClick={increment}>+</Button>
            <Button variant="text" style={{ margin: '3px', color: '#be9397', border: '1px solid #be9397' }} onClick={reset}>Reset</Button>
            <Button variant="contained" style={{ margin: '5px', backgroundColor: '#be9397' }} to={`/item/${item.id}`} onClick={() => addItem(item, counter, setSnackbarMessage, setSnackbarOpen, setSnackbarSeverity)}>Agregar al carrito</Button>
        </ButtonGroup>
    )
}
export default ItemQuantitySelector;