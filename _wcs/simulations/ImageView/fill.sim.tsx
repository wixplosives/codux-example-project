import React from 'react';
import { createSimulation } from '@wixc3/wcs-core';
import { ImageView } from '../../../src/components/image-view/image-view';
import { CanvasStretchingView } from '../../layouts/canvas-stretching-view/canvas-stretching-view';

export default createSimulation({
    componentType: ImageView,
    props: {
        src: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/380_Wix_logo-512.png',
        resizeMode: 'fill',
        positionVertical: 'center',
        positionHorizontal: 'center',
    },
    environmentProps: {
        canvasHeight: 250,
        canvasWidth: 250,
    },
    wrapper: ({ renderSimulation }) => {
        return <CanvasStretchingView>{renderSimulation()}</CanvasStretchingView>;
    },
    name: 'Fill',
});
