import React from "react";
import { createBoard } from '@wixc3/react-board';
import { StarsRating } from "../../../src/components/stars-rating/stars-rating";
import { FontAwesomeLoader } from "../../setup/font-awesome-loader";

export default createBoard({
  name: "Rating 0",
  board: function StarsRatingBoard() {
    return <StarsRating rating={0} />;
  },
  setup: [FontAwesomeLoader],
  environmentProps: {},
});
