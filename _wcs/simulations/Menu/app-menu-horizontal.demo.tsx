import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { Menu } from '../../../src/components/menu/menu';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createDemo({
    name: 'Horizontal Menu',
    demo: function MenuDemo() {
        return <Menu layout="horizontal" menuItems={[{
            title: 'Page 1', url: '#'
        }, {
            title: 'Page 2', url: '#'
        }, {
            title: 'Page With Long Title', url: '#'
        }]} />
    }, environmentProps: {},
    setup: [...CommonSimulationsSetup],
});