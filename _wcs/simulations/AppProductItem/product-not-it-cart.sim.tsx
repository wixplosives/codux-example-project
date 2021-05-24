import { createSimulation } from '@wixc3/wcs-core';
import { AppProductItem } from '../../../src/components/app-product-item/app-product-item';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    componentType: AppProductItem,
    props: {
        productId: 'grw2as',
        imageUrl:
            'https://static.wixstatic.com/media/d759b6_d1773d716a4746d8b70eb7c15112000e~mv2.png',
        productTitle: 'Uri Paz',
        modelName: 'The best UX',
        price: '$9.00',
        reviewsAverageRating: 4,
        reviewsCount: 22,
        isAddedToCart: false,
    },
    setup: [...CommonSimulationsSetup],
    environmentProps: {
        windowHeight: 640,
        canvasWidth: 360,
        windowWidth: 360
    },
    name: 'Product Not In Cart',
});
