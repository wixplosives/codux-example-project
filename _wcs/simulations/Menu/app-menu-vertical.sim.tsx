import { createSimulation } from '@wixc3/react-simulation';
import { Menu } from '../../../src/components/menu/menu';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    componentType: Menu,
    props: {
        layout: 'vertical',
        menuItems: [
            { title: 'Page 1', url: '#' },
            { title: 'Page 2', url: '#' },
            { title: 'Page With Long Title', url: '#' },
        ],
    },
    environmentProps: {},
    setup: [...CommonSimulationsSetup],
    name: 'Vertical Menu',
});
