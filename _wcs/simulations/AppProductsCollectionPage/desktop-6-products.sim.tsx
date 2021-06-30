import { createSimulation } from '@wixc3/wcs-core';
import { AppProductsCollectionPage } from '../../../src/components/app-products-collection-page/app-products-collection-page';
// import { Products } from '../../mocks/products';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';
// import { SiteMap } from '../../../src/stores/site-map';

export default createSimulation({
    name: 'Desktop - 6 Products',
    componentType: AppProductsCollectionPage,
    props: {
    },
    setup: [...CommonSimulationsSetup],
    environmentProps: {
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        windowHeight: 736,
        windowWidth: 1062,
        canvasWidth: 768,
        canvasHeight: 1477
    },
});
