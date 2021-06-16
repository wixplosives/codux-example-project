
import { createSimulation } from '@wixc3/wcs-core';
import { AppProductItem } from '../../../src/components/app-product-item/app-product-item';

export default createSimulation({
    name: 'Added to Cart',
    componentType: AppProductItem,
    props: {
        productTitle: 'heyyyy mint',
        price: '30$',
        isAddedToCart: true
    },
    environmentProps: {
        canvasWidth: 275
    }
});
