import { createSimulation } from '@wixc3/wcs-core';
import { Header } from '../../../src/components/header/header';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';
import { SiteMap } from '../../../src/stores/site-map';

export default createSimulation({
    name: 'Desktop - Not Logged In User',
    componentType: Header,
    props: {
        menuItems: [
            { title: SiteMap.Collections.title, url: SiteMap.Collections.url },
            { title: SiteMap.Shop.title, url: SiteMap.Shop.url },
            { title: SiteMap.About.title, url: SiteMap.About.url },
        ],
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
});
