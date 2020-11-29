import React from 'react';
import { createSimulation } from '@wixc3/wcs-core';
import { Header } from '../../../src/components/header/header';
import { LoggedInUserContext } from '../../../src/stores/user-store';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';
import { SiteMap } from '../../../src/stores/site-map';

export default createSimulation({
    componentType: Header,
    props: {
        menuItems: [
            { title: SiteMap.Collections.title, url: SiteMap.Collections.url },
            { title: SiteMap.Shop.title, url: SiteMap.Shop.url },
            { title: SiteMap.About.title, url: SiteMap.About.url },
        ],
        shoppingCartItemsCount: 2,
    },
    environmentProps: {
        canvasWidth: 450,
        canvasMargin: {
            left: 0,
            top: 0,
            right: 0,
        },
    },
    setup: [...CommonSimulationsSetup],
    wrapper: ({ renderSimulation }) => {
        return (
            <LoggedInUserContext.Provider
                value={{
                    imageUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
                    username: 'johnd',
                    fullName: 'John Doe',
                }}
            >
                {renderSimulation()}
            </LoggedInUserContext.Provider>
        );
    },
    name: 'Desktop - Logged In User',
});
