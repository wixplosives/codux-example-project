import { createBoard } from "@wixc3/react-board";
import { ShoppingCart } from "../../../src/components/shopping-cart/shopping-cart";
import { FontAwesomeLoader } from "../../setup/font-awesome-loader";
import React from "react";

export default createBoard({
  name: "Empty Cart",
  Board: function ShoppingCartBoard() {
    return <ShoppingCart itemsCount={0} />;
  },
  setup: [FontAwesomeLoader],
  environmentProps: {},
});
