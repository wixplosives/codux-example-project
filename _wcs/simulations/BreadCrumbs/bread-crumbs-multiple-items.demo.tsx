import React from "react";
import { createDemo } from "@wixc3/react-simulation";
import { BreadCrumbs } from "../../../src/components/bread-crumbs/bread-crumbs";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";
import { SiteMap } from "../../../src/stores/site-map";

export default createDemo({
  name: "Multiple Items",
  demo: function BreadCrumbsDemo() {
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
