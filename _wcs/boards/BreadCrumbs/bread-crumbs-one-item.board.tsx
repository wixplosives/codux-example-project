import React from "react";
import { createBoard } from '@wixc3/react-board';
import { BreadCrumbs } from "../../../src/components/bread-crumbs/bread-crumbs";
import { CommonBoardsSetup } from "../../setup/common-board-setup";
import { SiteMap } from "../../../src/stores/site-map";

export default createBoard({
  name: "One Item",
  Board: function BreadCrumbsBoard() {
    return <BreadCrumbs items={[SiteMap.HomePage]} />;
  },
  environmentProps: {},
  setup: [...CommonBoardsSetup],
});
