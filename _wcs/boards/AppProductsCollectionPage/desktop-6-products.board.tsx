import React from "react";
import { createBoard } from "@wixc3/react-board";
import { AppProductsCollectionPage } from "../../../src/components/app-products-collection-page/app-products-collection-page";
import { CommonBoardsSetup } from "../../setup/common-board-setup";

export default createBoard({
  name: "Desktop - 6 Products",
  Board: function AppProductsCollectionPageBoard() {
    return (
      <AppProductsCollectionPage
        products={[
          {
            productId: "grw2as",
            imageUrl:
              "https://static.wixstatic.com/media/d759b6_d1773d716a4746d8b70eb7c15112000e~mv2.png",
            productTitle: "Swim Swim Swim",
            modelName: "Red on Cyan",
            price: "$19.99",
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
          {
            productId: "ds21asf",
            imageUrl:
              "https://static.wixstatic.com/media/d759b6_fab1717bf69f47be83fcf8fe2b62bd32~mv2.png",
            productTitle: "Blue Bananas",
            modelName: "Size A3",
            price: "$29.00",
            reviewsAverageRating: 4,
            reviewsCount: 31,
          },
          {
            productId: "gdf21s",
            imageUrl:
              "https://static.wixstatic.com/media/d759b6_d6765f81d9ff40259cda97a65900124c~mv2.png",
            productTitle: "Red Bananas",
            modelName: "Size A3",
            price: "$19.00",
            reviewsAverageRating: 3.3,
            reviewsCount: 8,
            isNew: true,
          },
          {
            productId: "cddsw1",
            imageUrl:
              "https://static.wixstatic.com/media/d759b6_9cfb769af4444c4dac85cbceb5f6c437~mv2.png",
            productTitle: "A Feline Madness",
            modelName: "4 Paws",
            price: "$11.00",
            reviewsAverageRating: 4,
            reviewsCount: 22,
          },
          {
            productId: "4a3sdf",
            imageUrl:
              "https://static.wixstatic.com/media/d759b6_29f07e1f1f544f23ac3d5128274ce2c4~mv2.png",
            productTitle: "Beach Day",
            modelName: "Lilac Gray",
            price: "$22.00",
            reviewsAverageRating: 4,
            reviewsCount: 22,
          },
        ]}
        breadCrumbs={[
          {
            title: "First",
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
            title: "Diva Collection",
            url: "#",
          },
          {
            title: "Shop",
            url: "#",
          },
        ]}
      />
    );
  },
  setup: [...CommonBoardsSetup],
  environmentProps: {
    canvasMargin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    windowHeight: 736,
    windowWidth: 1062,
    canvasWidth: 768,
    canvasHeight: 1477,
  },
});
