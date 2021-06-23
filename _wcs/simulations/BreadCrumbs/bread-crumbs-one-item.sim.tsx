import { createSimulation } from '@wixc3/wcs-core';
import { BreadCrumbs } from '../../../src/components/bread-crumbs/bread-crumbs';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    name: 'One Item',
    componentType: BreadCrumbs,
    props: {
        items: [{
            title: 'First Item',
            url: '#'
        }, {
            title: 'Seconnd Item', url: '#'
        }, {
            title: 'third123 Item', url: '#'
        },]
    },
    environmentProps: {
        windowWidth: 654,
        windowHeight: 372,
        canvasWidth: 392
    },
    setup: [...CommonSimulationsSetup],
});
