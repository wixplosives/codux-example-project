import React from "react";
import { createBoard } from '@wixc3/react-board';
import { Logo } from "../../../src/components/logo/logo";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";

export default createBoard({
  name: "Default",
  board: function LogoBoard() {
    return <Logo />;
  },
  environmentProps: {},
  setup: [...CommonSimulationsSetup],
});
