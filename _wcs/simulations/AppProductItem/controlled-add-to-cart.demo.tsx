import { useState } from "react";
import { createDemo } from "@wixc3/react-simulation";
import { AppProductItem } from "../../../src/components/app-product-item/app-product-item";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";
import React from "react";

export default createDemo({
  name: "Controlled isAddedToCart",
  demo: () => {
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
  setup: [...CommonSimulationsSetup],
  environmentProps: {
    windowHeight: 726,
    canvasWidth: 360,
  },
});
