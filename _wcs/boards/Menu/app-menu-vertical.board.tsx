import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Menu } from "../../../src/components/menu/menu";
import { CommonBoardsSetup } from "../../setup/common-board-setup";

export default createBoard({
  Board: function MenuBoard() {
    return (
      <Menu
        layout="vertical"
        menuItems={[
          {
            title: "Page 1",
            url: "#",
          },
          {
            title: "Page 2",
            url: "#",
          },
          {
            title: "Page With Long Title",
            url: "#",
          },
        ]}
      />
    );
  },
  environmentProps: {},
  setup: [...CommonBoardsSetup],
  name: "Vertical Menu",
});
