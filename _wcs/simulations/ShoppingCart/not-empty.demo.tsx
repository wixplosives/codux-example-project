import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { ShoppingCart } from '../../../src/components/shopping-cart/shopping-cart';
import { FontAwesomeLoader } from '../../setup/font-awesome-loader';

export default createDemo({
    name: 'Not Empty Cart',
    demo: function ShoppingCartDemo() { return <ShoppingCart itemsCount={3} /> }, setup: [FontAwesomeLoader],
    environmentProps: {},
});