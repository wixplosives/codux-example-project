import React from "react";
import { createBoard } from '@wixc3/react-board';
import { AppProductsCollectionPage } from "../../../src/components/app-products-collection-page/app-products-collection-page";
import { Products } from "../../mocks/products";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";
import { SiteMap } from "../../../src/stores/site-map";

export default createBoard({
  name: "References",
  demo: function AppProductsCollectionPageDemo() {
    return (
      <AppProductsCollectionPage
        products={[
          Products[0],
          Products[1],
          Products[2],
          Products[3],
          Products[4],
          Products[5],
        ]}
        breadCrumbs={[
          SiteMap.HomePage,
          SiteMap.NewCollections,
          SiteMap.DivaCollection,
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
    windowHeight: 746,
    windowWidth: 1012,
  },
});
