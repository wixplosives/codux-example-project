import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { Logo } from '../../../src/components/logo/logo';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createDemo({
    name: 'Default',
    demo: function LogoDemo() { return <Logo /> }, environmentProps: {},
    setup: [...CommonSimulationsSetup],
});