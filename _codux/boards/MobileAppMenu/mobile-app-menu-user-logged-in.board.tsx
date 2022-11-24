import React from "react";
import { createBoard } from '@wixc3/react-board';
import { MobileAppMenu } from "../../../src/components/mobile-app-menu/mobile-app-menu";
import { CommonBoardsSetup } from "../../setup/common-board-setup";
import { LoggedInUserContext } from "../../../src/stores/user-store";
import { SiteMap } from "../../../src/stores/site-map";

export default createBoard({
  name: "User Logged In",
  Board: () => (
    <LoggedInUserContext.Provider
      value={{
        imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
        username: "johnd",
        fullName: "John Doe",
      }}
    >
      <MobileAppMenu
        menuItems={[
          { title: SiteMap.Collections.title, url: SiteMap.Collections.url },
          { title: SiteMap.Shop.title, url: SiteMap.Shop.url },
          { title: SiteMap.About.title, url: SiteMap.About.url },
        ]}
      />
    </LoggedInUserContext.Provider>
  ),
  setup: [...CommonBoardsSetup],
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
