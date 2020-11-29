import { createSimulation } from '@wixc3/wcs-core';
import { UserStatus } from '../../../src/components/user-status/user-status';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    name: 'Logged In User',
    componentType: UserStatus,
    props: {
        userInfo: {
            username: 'johnd',
            fullName: 'John Doe',
        },
    },
    environmentProps: {},
    setup: [...CommonSimulationsSetup],
});
