import React from "react";
import { createBoard } from '@wixc3/react-board';
import { ShoppingCart } from "../../../src/components/shopping-cart/shopping-cart";
import { FontAwesomeLoader } from "../../setup/font-awesome-loader";

export default createBoard({
  name: "Not Empty Cart",
  demo: function ShoppingCartDemo() {
    return <ShoppingCart itemsCount={3} />;
  },
  setup: [FontAwesomeLoader],
  environmentProps: {},
});
