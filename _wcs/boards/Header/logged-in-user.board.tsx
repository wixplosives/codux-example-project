import React from "react";
import { createBoard } from '@wixc3/react-board';
import { Header } from "../../../src/components/header/header";
import { LoggedInUserContext } from "../../../src/stores/user-store";
import { CommonBoardsSetup } from "../../setup/common-board-setup";
import { SiteMap } from "../../../src/stores/site-map";

export default createBoard({
  name: "Desktop - Logged In User",
  Board: () => (
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
  setup: [...CommonBoardsSetup],
});
