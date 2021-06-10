import { createSimulation } from '@wixc3/wcs-core';
import { AppProductItem } from '../../../src/components/app-product-item/app-product-item';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    componentType: AppProductItem,
    props: {
       
    },
    setup: [...CommonSimulationsSetup],
    environmentProps: {
        windowHeight: 726,
        canvasWidth: 360,
    },
    name: 'Product Card',
});
