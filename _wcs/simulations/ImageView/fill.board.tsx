import React from "react";
import { createDemo } from "@wixc3/react-simulation";
import { ImageView } from "../../../src/components/image-view/image-view";
import { CanvasStretchingView } from "../../layouts/canvas-stretching-view/canvas-stretching-view";

export default createBoard({
  Board: () => (
    <CanvasStretchingView>
      <ImageView
        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/380_Wix_logo-512.png"
        resizeMode="fill"
        positionVertical="center"
        positionHorizontal="center"
      />
    </CanvasStretchingView>
  ),
  environmentProps: {
    canvasHeight: 250,
    canvasWidth: 250,
  },
  name: "Fill",
});
