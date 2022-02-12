import React from "react";
import { createDemo } from "@wixc3/react-simulation";
import { StarsRating } from "../../../src/components/stars-rating/stars-rating";
import { FontAwesomeLoader } from "../../setup/font-awesome-loader";

export default createBoard({
  name: "Rating 0",
  demo: function StarsRatingDemo() {
    return <StarsRating rating={0} />;
  },
  setup: [FontAwesomeLoader],
  environmentProps: {},
});
