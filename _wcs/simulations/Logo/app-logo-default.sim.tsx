import { createSimulation } from '@wixc3/react-simulation';
import { Logo } from '../../../src/components/logo/logo';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    name: 'Default',
    componentType: Logo,
    props: {},
    environmentProps: {},
    setup: [...CommonSimulationsSetup],
});
