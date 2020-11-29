import { createSimulation } from '@wixc3/wcs-core';
import { AppProductsCollectionPage } from '../../../src/components/app-products-collection-page/app-products-collection-page';
import { Products } from '../../mocks/products';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';
import { SiteMap } from '../../../src/stores/site-map';

export default createSimulation({
    name: 'Desktop - 2 Products',
    componentType: AppProductsCollectionPage,
    props: {
        products: [Products[0], Products[1]],
        breadCrumbs: [SiteMap.HomePage, SiteMap.NewCollections, SiteMap.DivaCollection],
    },
    setup: [...CommonSimulationsSetup],
    environmentProps: {
        canvasMargin: {
            left: 0,
            top: 0,
            right: 0,
        },
        windowHeight: 640,
        windowWidth: 1280,
    },
});
