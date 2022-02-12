import React from "react";
import { createBoard } from "@wixc3/react-board";
import { BreadCrumbs } from "../../../src/components/bread-crumbs/bread-crumbs";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";
import { SiteMap } from "../../../src/stores/site-map";

export default createBoard({
  name: "Multiple Items",
  Board: function BreadCrumbsBoard() {
    return (
      <BreadCrumbs
        items={[
          SiteMap.HomePage,
          SiteMap.NewCollections,
          SiteMap.DivaCollection,
        ]}
      />
    );
  },
  environmentProps: {},
  setup: [...CommonSimulationsSetup],
});
