import React from "react";
import { createBoard } from '@wixc3/react-board';
import { ImageView } from "../../../src/components/image-view/image-view";
import { CanvasStretchingView } from "../../layouts/canvas-stretching-view/canvas-stretching-view";

export default createBoard({
  name: "Cover + Top Center",
  Board: () => (
    <CanvasStretchingView>
      <ImageView
        resizeMode="cover"
        positionVertical="top"
        positionHorizontal="center"
        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/380_Wix_logo-512.png"
      />
    </CanvasStretchingView>
  ),
  environmentProps: {
    canvasHeight: 250,
    canvasWidth: 250,
  },
});
