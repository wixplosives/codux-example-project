import React from "react";
import { createDemo } from "@wixc3/react-simulation";
import { Header } from "../../../src/components/header/header";
import { LoggedInUserContext } from "../../../src/stores/user-store";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";
import { SiteMap } from "../../../src/stores/site-map";

export default createDemo({
  demo: () => (
    <LoggedInUserContext.Provider
      value={{
        imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
        username: "johnd",
        fullName: "John Doe",
      }}
    >
      <Header
        menuItems={[
          { title: SiteMap.Collections.title, url: SiteMap.Collections.url },
          { title: SiteMap.Shop.title, url: SiteMap.Shop.url },
          { title: SiteMap.About.title, url: SiteMap.About.url },
        ]}
        shoppingCartItemsCount={2}
      />
    </LoggedInUserContext.Provider>
  ),
  environmentProps: {
    canvasWidth: 450,
    canvasMargin: {
      left: 0,
      top: 0,
      right: 0,
    },
  },
  setup: [...CommonSimulationsSetup],
  name: "Desktop - Logged In User",
});
