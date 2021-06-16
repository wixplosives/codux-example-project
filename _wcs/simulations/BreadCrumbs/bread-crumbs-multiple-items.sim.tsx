import { createSimulation } from '@wixc3/wcs-core';
import { BreadCrumbs } from '../../../src/components/bread-crumbs/bread-crumbs';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    componentType: BreadCrumbs,
    props: {
        items: [{
            title: 'Home123',
            url: '#'
        }, {
            title: 'New Collection2221',
            url: '#'
        }, {
            title: 'Notebooks333',
            url: '#'
        }, {
            title: 'Notebooks', url: '#'
        },],
    },
    environmentProps: {
        windowWidth: 703,
        canvasWidth: 411,
        canvasHeight: 47,
        windowHeight: 731,
        windowBackgroundColor: '#fdfdfd'
    },
    setup: [...CommonSimulationsSetup],
    name: 'Multiple Items',
});
