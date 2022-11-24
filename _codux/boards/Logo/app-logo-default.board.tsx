import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Logo } from "../../../src/components/logo/logo";
import { CommonBoardsSetup } from "../../setup/common-board-setup";

export default createBoard({
  name: "Default",
  Board: function LogoBoard() {
    return <Logo />;
  },
  environmentProps: {},
  setup: [...CommonBoardsSetup],
});
