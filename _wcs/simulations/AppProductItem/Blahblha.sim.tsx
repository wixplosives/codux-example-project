
import { createSimulation } from '@wixc3/wcs-core';
import { AppProductItem } from '../../../src/components/app-product-item/app-product-item';

export default createSimulation({
    name: 'Blahblha',
    componentType: AppProductItem,
    props: {
        productTitle: 'heyyyy mint heyyyy mint heyyyy mint ה ',
        price: '30$',
        isAddedToCart: true
    },
    environmentProps: {
        canvasWidth: 275
    }
});
