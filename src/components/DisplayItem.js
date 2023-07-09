import { useContext } from "react";
import classes from "./DisplayItem.module.css";
import cartContext from "./store/cart-context";

const DisplayItem = () => {
  const ctx = useContext(cartContext);
  console.log(ctx);

  const buyLargeHandler = (item) => {
    const items = {
      tShirtName: item.tShirtName,
      tShirtDes: item.tShirtDes,
      tShirtPrice: item.tShirtPrice,
      tShirtQuantityL: 1,
      tShirtQuantityM: 0,
      tShirtQuantityS: 0,
    };
    ctx.addToCart(items);
  };

  const buyMediumHandler = (item) => {
    const items = {
      tShirtName: item.tShirtName,
      tShirtDes: item.tShirtDes,
      tShirtPrice: item.tShirtPrice,
      tShirtQuantityL: 0,
      tShirtQuantityM: 1,
      tShirtQuantityS: 0,
    };
    ctx.addToCart(items);
  };
  const buySmallHandler = (item) => {
    const items = {
      tShirtName: item.tShirtName,
      tShirtDes: item.tShirtDes,
      tShirtPrice: item.tShirtPrice,
      tShirtQuantityL: 0,
      tShirtQuantityM: 0,
      tShirtQuantityS: 1,
    };
    ctx.addToCart(items);
  };
  const allItems = ctx.items.map((item) => {
    return (
      <div key={Math.random()} className={classes.item}>
        <h2>{item.tShirtName}</h2>
        <h2>{item.tShirtDes}</h2>
        <h2>{item.tShirtPrice}</h2>
        <div>
          <button
            onClick={() => {
              buyLargeHandler(item);
            }}
          >
            buy large{item.tShirtQuantityL}
          </button>
          <button
            onClick={() => {
              buyMediumHandler(item);
            }}
          >
            buy Medium{item.tShirtQuantityM}
          </button>
          <button
            onClick={() => {
              buySmallHandler(item);
            }}
          >
            buy Small{item.tShirtQuantityS}
          </button>
        </div>
      </div>
    );
  });
  return <>{allItems}</>;
};

export default DisplayItem;