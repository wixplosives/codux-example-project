import React from "react";
import { createBoard } from '@wixc3/react-board';
import { AppProductsCollectionPage } from "../../../src/components/app-products-collection-page/app-products-collection-page";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";

export default createBoard({
  name: "Desktop - 2 Products",
  board: function AppProductsCollectionPageBoard() {
    return (
      <AppProductsCollectionPage
        products={[
          {
            productId: "grw2as",
            imageUrl:
              "https://static.wixstatic.com/media/d759b6_d1773d716a4746d8b70eb7c15112000e~mv2.png",
            productTitle: "Swim Swim Swim",
            modelName: "Red on Cyan",
            price: "202020$",
            reviewsAverageRating: 4,
            reviewsCount: 22,
          },
          {
            productId: "a3Bc56",
            imageUrl:
              "https://static.wixstatic.com/media/d759b6_c70b7d0afbc44337ada750494c80692e~mv2.png",
            productTitle: "Tiger Lady",
            modelName: "Full Open",
            price: "$13.00",
            reviewsAverageRating: 4,
            reviewsCount: 22,
          },
        ]}
        breadCrumbs={[
          {
            title: "Home",
            url: "#",
          },
          {
            title: "Collections",
            url: "#",
          },
          {
            title: "New Collections",
            url: "#",
          },
          {
            title: "Recently Added",
            url: "#",
          },
        ]}
      />
    );
  },
  setup: [...CommonSimulationsSetup],
  environmentProps: {
    canvasMargin: {
      left: 0,
      top: 0,
      right: 0,
    },
    windowHeight: 732,
    windowWidth: 1048,
  },
});
