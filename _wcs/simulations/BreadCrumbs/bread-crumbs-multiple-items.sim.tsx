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
    environmentProps: {},
    setup: [...CommonSimulationsSetup],
    name: 'Multiple Items',
});
