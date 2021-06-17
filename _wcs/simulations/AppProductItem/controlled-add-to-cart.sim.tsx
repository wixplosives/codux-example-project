import { useState } from 'react';
import { createSimulation } from '@wixc3/wcs-core';
import { AppProductItem } from '../../../src/components/app-product-item/app-product-item';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    componentType: AppProductItem,
    props: {
        productId: 'grw2as',
        imageUrl:
            'https://static.wixstatic.com/media/d759b6_d1773d716a4746d8b70eb7c15112000e~mv2.png',
        productTitle: 'Swim Swim Swim',
        modelName: 'Red on Cyan',
        price: '$9.00',
        reviewsAverageRating: 4,
        reviewsCount: 22,
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
        windowWidth: 652
    },
    name: 'Controlled isAddedToCart',
});
