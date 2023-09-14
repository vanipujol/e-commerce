import CartIcon from "./CartIcon.jsx";
import CartItems from "./CartItems.jsx";

const CartWidget = () => {
    return (
        <div className="bg-secondary rounded p-3 position-relative" style={{cursor: "pointer"}}>
            <CartIcon color="white"/>
            <CartItems count={8}/>
        </div>
    );
};

export default CartWidget;