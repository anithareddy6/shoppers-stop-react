import classes from "./cart.module.css";
import { useContext } from "react";
import cartContext from "./store/cart-context";

const Cart = () => {
  const ctx = useContext(cartContext);
  const cartItems = ctx.cart.map((item) => {
    return (
      <div className={classes.modal}>
        <h2>{item.tShirtName}</h2>
        <h2>{item.tShirtDes}</h2>
        <h2>{item.tShirtPrice}</h2>
        <h2>{item.tShirtQuantityL}</h2>
        <h2>{item.tShirtQuantityM}</h2>
        <h2>{item.tShirtQuantityS}</h2>
      </div>
    );
  });
  return <>{cartItems}</>;
};

export default Cart;