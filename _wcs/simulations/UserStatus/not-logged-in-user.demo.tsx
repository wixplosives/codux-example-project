import React from "react";
import { createDemo } from "@wixc3/react-simulation";
import { UserStatus } from "../../../src/components/user-status/user-status";
import { CommonSimulationsSetup } from "../../setup/common-simulations-setup";

export default createDemo({
  name: "Not Logged In User",
  demo: function UserStatusDemo() {
    return <UserStatus />;
  },
  environmentProps: {},
  setup: [...CommonSimulationsSetup],
});
