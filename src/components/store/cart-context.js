import React from "react";

const cartContext = React.createContext({
  items: [],
  addItems: (item) => {},
  cart: [],
  addToCart: (item) => {},
});

export default cartContext;