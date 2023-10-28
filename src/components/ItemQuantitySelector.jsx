import {Button, ButtonGroup} from "@mui/material";
import Typography from "@mui/material/Typography";

/**
 * React component for selecting and managing the quantity of an item to be added to the cart.
 *
 * This component provides buttons to increment, decrement, reset the quantity, and add the item to the cart.
 *
 * @param {Object} props - The component's props.
 * @param {number} props.counter - The current quantity value.
 * @param {function} props.decrement - The function to decrement the quantity.
 * @param {function} props.increment - The function to increment the quantity.
 * @param {function} props.reset - The function to reset the quantity.
 * @param {function} props.addItem - The function to add the item to the cart.
 * @param {function} props.setSnackbarMessage - The function to set the snackbar message.
 * @param {function} props.setSnackbarOpen - The function to control snackbar visibility.
 * @param {function} props.setSnackbarSeverity - The function to set the snackbar severity.
 * @param {Object} props.item - The item to be added to the cart.
 * @returns {JSX.Element} The rendered item quantity selector component.
 */

const ItemQuantitySelector = ({
                                  counter,
                                  decrement,
                                  increment,
                                  reset,
                                  addItem,
                                  setSnackbarMessage,
                                  setSnackbarOpen,
                                  setSnackbarSeverity,
                                  item
                              }) => {
    return (
        <ButtonGroup style={{marginTop: '1em'}}>
            <Button variant="text" style={{margin: '3px', color: '#be9397', border: '1px solid #be9397'}}
                    onClick={decrement}>-</Button>
            <Typography className={`rosedark-color`}
                        style={{margin: '3px', alignItems: 'center', display: 'flex'}}>{counter}</Typography>
            <Button variant="text" style={{margin: '3px', color: '#be9397', border: '1px solid #be9397'}}
                    onClick={increment}>+</Button>
            <Button variant="text" style={{margin: '3px', color: '#be9397', border: '1px solid #be9397'}}
                    onClick={reset}>Reset</Button>
            <Button variant="contained" style={{margin: '5px', backgroundColor: '#be9397'}} to={`/item/${item.id}`}
                    onClick={() => addItem(item, counter, setSnackbarMessage, setSnackbarOpen, setSnackbarSeverity)}>Agregar
                al carrito</Button>
        </ButtonGroup>
    )
}
export default ItemQuantitySelector;