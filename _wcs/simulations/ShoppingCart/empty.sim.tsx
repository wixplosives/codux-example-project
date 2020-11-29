import { createSimulation } from '@wixc3/wcs-core';
import { ShoppingCart } from '../../../src/components/shopping-cart/shopping-cart';
import { FontAwesomeLoader } from '../../setup/font-awesome-loader';

export default createSimulation({
    name: 'Empty Cart',
    componentType: ShoppingCart,
    props: {
        itemsCount: 0,
    },
    setup: [FontAwesomeLoader],
    environmentProps: {},
});
