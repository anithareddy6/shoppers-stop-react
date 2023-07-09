import { useContext, useRef, useState } from "react";
import classes from "./AddItem.module.css";
import Cart from "./Cart";
import cartContext from "./store/cart-context";

const AddItem = () => {
  const [modal, showModal] = useState(false);
  const ctx = useContext(cartContext);
  const tShirtNameRef = useRef();
  const tShirtDesRef = useRef();
  const tShirtPriceRef = useRef();
  const tShirtQuantityLRef = useRef();
  const tShirtQuantityMRef = useRef();
  const tShirtQuantitySRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(tShirtPriceRef.current.value);
    const addedItemObj = {
      tShirtName: tShirtNameRef.current.value,
      tShirtDes: tShirtDesRef.current.value,
      tShirtPrice: tShirtPriceRef.current.value,
      tShirtQuantityL: tShirtQuantityLRef.current.value,
      tShirtQuantityM: tShirtQuantityMRef.current.value,
      tShirtQuantityS: tShirtQuantitySRef.current.value,
    };
    ctx.addItems(addedItemObj);
  };

  const openCartHandler = () => {
    showModal((PrevValue) => {
      return!PrevValue;
    });
  };
  return (
    <div>
      <div>
        <form className={classes.addItem} onSubmit={formSubmitHandler}>
          <div>
            <label>T-Shirt Name</label>
            <input ref={tShirtNameRef} type="text" placeholder="T-shirt Name" />
          </div>
          <div>
            <label>T-Shirt Description</label>
            <input
              ref={tShirtDesRef}
              type="text"
              placeholder="T-shirt Description"
            />
          </div>
          <div>
            <label>T-Shirt Price</label>
            <input
              ref={tShirtPriceRef}
              type="number"
              placeholder="T-shirt Name"
            />
          </div>
          <div className={classes.quantity}>
            <span>
              Quantity Available <label>L</label>
              <input ref={tShirtQuantityLRef} type="number" />
              <label>M</label>
              <input ref={tShirtQuantityMRef} type="number" />
              <label>S</label>
              <input ref={tShirtQuantitySRef} type="number" />
            </span>
          </div>
          <button>Add Product</button>
        </form>
      </div>
      <div>
        <button onClick={openCartHandler}>cart</button>
        {!modal && <Cart></Cart>}
      </div>
    </div>
  );
};
export default AddItem;