import { useState } from "react";
import { createBoard } from '@wixc3/react-board';
import { AppProductItem } from "../../../src/components/app-product-item/app-product-item";
import { CommonBoardsSetup } from "../../setup/common-board-setup";
import React from "react";

export default createBoard({
  name: "Controlled isAddedToCart",
  Board: () => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    return (
      <AppProductItem
        isAddedToCart={isAddedToCart}
        onAddToCartButtonClick={() =>
          setIsAddedToCart((isAddedToCart) => !isAddedToCart)
        }
        productId="grw2as"
        imageUrl="https://static.wixstatic.com/media/d759b6_d1773d716a4746d8b70eb7c15112000e~mv2.png"
        productTitle="Swim Swim Swim"
        modelName="Red on Cyan"
        price="$9.00"
        reviewsAverageRating={4}
        reviewsCount={22}
      />
    );
  },
  setup: [...CommonBoardsSetup],
  environmentProps: {
    windowHeight: 726,
    canvasWidth: 360,
  },
});
