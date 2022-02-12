import React from "react";
import { createDemo } from "@wixc3/react-simulation";
import { MobileAppMenu } from "../../../src/components/mobile-app-menu/mobile-app-menu";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";
import { SiteMap } from "../../../src/stores/site-map";

export default createBoard({
  name: "User Not Logged In",
  demo: function MobileAppMenuDemo() {
    return (
      <MobileAppMenu
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
      />
    );
  },
  setup: [...CommonSimulationsSetup],
  environmentProps: {
    windowWidth: 360,
    windowHeight: 640,
    canvasMargin: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
  },
});
