import React from "react";
import { createDemo } from "@wixc3/react-simulation";
import { ImageView } from "../../../src/components/image-view/image-view";
import { CanvasStretchingView } from "../../layouts/canvas-stretching-view/canvas-stretching-view";

export default createDemo({
  name: "Contain + Center",
  demo: () => (
    <CanvasStretchingView>
      <ImageView
        resizeMode="contain"
        positionVertical="center"
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
