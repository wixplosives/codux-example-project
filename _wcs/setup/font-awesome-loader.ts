import type { BoardSetupFunction } from '@wixc3/board-core';

export const FontAwesomeLoader: BoardSetupFunction = (controller) =>
    controller.addStylesheet('https://use.fontawesome.com/releases/v5.5.0/css/all.css');
