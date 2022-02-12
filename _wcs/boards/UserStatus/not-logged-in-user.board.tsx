import React from "react";
import { createBoard } from '@wixc3/react-board';
import { UserStatus } from "../../../src/components/user-status/user-status";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";

export default createBoard({
  name: "Not Logged In User",
  demo: function UserStatusDemo() {
    return <UserStatus />;
  },
  environmentProps: {},
  setup: [...CommonSimulationsSetup],
});
