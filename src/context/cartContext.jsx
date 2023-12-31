import {createContext} from "react";

/**
 * Context object for managing shopping cart data.
 *
 * This context provides a way to share and manage shopping cart data and functions with child components.
 *
 * @type {React.Context}
 */
const CartContext = createContext({});

export default CartContext;