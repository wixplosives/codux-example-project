import { createDemo } from "@wixc3/react-simulation";
import { ShoppingCart } from "../../../src/components/shopping-cart/shopping-cart";
import { FontAwesomeLoader } from "../../setup/font-awesome-loader";
import React from "react";

export default createBoard({
  name: "Empty Cart",
  demo: function ShoppingCartDemo() {
    return <ShoppingCart itemsCount={0} />;
  },
  setup: [FontAwesomeLoader],
  environmentProps: {},
});
