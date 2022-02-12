import React from "react";
import { createBoard } from "@wixc3/react-board";
import { ProductsList } from "../../../src/components/products-list/products-list";
import { Products } from "../../mocks/products";

export default createBoard({
  name: "Stretched - Tablet Landscape",
  Board: function ProductsListBoard() {
    return (
      <ProductsList
        products={[
          Products[0],
          Products[1],
          Products[2],
          Products[3],
          Products[4],
          Products[5],
        ]}
      />
    );
  },
  environmentProps: {
    canvasMargin: {
      left: 0,
      right: 0,
    },
    windowHeight: 500,
    windowWidth: 1024,
  },
});
