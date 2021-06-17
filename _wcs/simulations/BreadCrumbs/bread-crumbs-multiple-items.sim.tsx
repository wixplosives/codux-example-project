import { createSimulation } from '@wixc3/wcs-core';
import { BreadCrumbs } from '../../../src/components/bread-crumbs/bread-crumbs';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    componentType: BreadCrumbs,
    props: {
        items: [{
            title: 'Home',
            url: '#'
        }, {
            title: 'LALALALA', url: '#'
        }, {
            title: 'LKJKJKJKJ', url: '#'
        },],
    },
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 276,
        canvasHeight: 31,
        windowBackgroundColor: '#bb7272',
        canvasBackgroundColor: '#c07979',
    },
    setup: [...CommonSimulationsSetup],
    name: 'Multiple Items',
});
