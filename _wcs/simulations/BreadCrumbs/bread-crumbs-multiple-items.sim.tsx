import { createSimulation } from '@wixc3/react-simulation';
import { BreadCrumbs } from '../../../src/components/bread-crumbs/bread-crumbs';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';
import { SiteMap } from '../../../src/stores/site-map';

export default createSimulation({
    componentType: BreadCrumbs,
    props: {
        items: [SiteMap.HomePage, SiteMap.NewCollections, SiteMap.DivaCollection],
    },
    environmentProps: {},
    setup: [...CommonSimulationsSetup],
    name: 'Multiple Items',
});
