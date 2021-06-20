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
            title: 'Shop', url: '#'
        }, {
            title: 'Notebook Collection', url: '#'
        },],
    },
    environmentProps: {
        windowWidth: 1006,
        windowHeight: 768,
        canvasWidth: 253,
        canvasHeight: 69,
        windowBackgroundColor: '#f1ebeb',
        canvasBackgroundColor: '#f1ebeb',
    },
    setup: [...CommonSimulationsSetup],
    name: 'Multiple Items',
});
