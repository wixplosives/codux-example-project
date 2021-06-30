import { useState } from 'react';
import { createSimulation } from '@wixc3/wcs-core';
import { AppProductItem } from '../../../src/components/app-product-item/app-product-item';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    componentType: AppProductItem,
    props: {
        productId: 10,
        imageUrl:
            'https://static.wixstatic.com/media/d759b6_d1773d716a4746d8b70eb7c15112000e~mv2.png',
        productTitle: xasxac ,
        modelName: 'Red on Cyan',
        price: '//////',
        reviewsAverageRating: 4,
        reviewsCount: 22,
        isAddedToCart: true
    },
    setup: [...CommonSimulationsSetup],
    wrapper: ({ renderSimulation }) => {
        const [isAddedToCard, setIsAddedToCard] = useState(false);
        return renderSimulation({
            isAddedToCart: isAddedToCard,
            onAddToCartButtonClick: () => {
                setIsAddedToCard((isAddedToCard) => !isAddedToCard);
            },
        });
    },
    environmentProps: {
        windowHeight: 726,
        canvasWidth: 360,
    },
    name: 'Controlled isAddedToCart',
});
