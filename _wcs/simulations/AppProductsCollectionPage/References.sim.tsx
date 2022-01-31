import { createSimulation } from '@wixc3/react-simulation';
import { AppProductsCollectionPage } from '../../../src/components/app-products-collection-page/app-products-collection-page';
import { Products } from '../../mocks/products';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';
import { SiteMap } from '../../../src/stores/site-map';

export default createSimulation({
    name: 'References',
    componentType: AppProductsCollectionPage,
    props: {
        products: [Products[0], Products[1], Products[2], Products[3], Products[4], Products[5]],
        breadCrumbs: [SiteMap.HomePage, SiteMap.NewCollections, SiteMap.DivaCollection],
    },
    setup: [...CommonSimulationsSetup],
    environmentProps: {
        canvasMargin: {
            left: 0,
            top: 0,
            right: 0,
        },
        windowHeight: 746,
        windowWidth: 1012,
    },
});
