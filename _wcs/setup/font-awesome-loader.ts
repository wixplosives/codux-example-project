import type { SimulationSetupFunction } from '@wixc3/wcs-core';

export const FontAwesomeLoader: SimulationSetupFunction = (controller) =>
    controller.addStylesheet('https://use.fontawesome.com/releases/v5.5.0/css/all.css');
