import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Header } from "../../../src/components/header/header";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";
import { SiteMap } from "../../../src/stores/site-map";

export default createBoard({
  name: "Desktop - Not Logged In User",
  Board: function HeaderBoard() {
    return (
      <Header
        menuItems={[
          {
            title: SiteMap.Collections.title,
            url: SiteMap.Collections.url,
          },
          {
            title: SiteMap.Shop.title,
            url: SiteMap.Shop.url,
          },
          {
            title: SiteMap.About.title,
            url: SiteMap.About.url,
          },
        ]}
        shoppingCartItemsCount={0}
      />
    );
  },
  environmentProps: {
    canvasWidth: 450,
    canvasMargin: {
      left: 0,
      top: 0,
      right: 0,
    },
  },
  setup: [...CommonSimulationsSetup],
});
