import React from "react";
import { createBoard } from "@wixc3/react-board";
import { UserStatus } from "../../../src/components/user-status/user-status";
import { CommonBoardsSetup } from "../../setup/common-board-setup";

export default createBoard({
  name: "Logged In User",
  Board: function UserStatusBoard() {
    return (
      <UserStatus
        userInfo={{
          username: "johnd",
          fullName: "John Doe",
        }}
      />
    );
  },
  environmentProps: {},
  setup: [...CommonBoardsSetup],
});
